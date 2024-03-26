// -------------- Types ----------- \\
import {
  GetChatByIdTypes,
  GetChatsTypes,
  RemoveChatTypes,
  SendMessageTypes,
} from "../../types/resolvers/chats";

// -------------- Services ----------- \\
import model from "../../services/gemini.service";

// -------------- DB ----------- \\
import fireBase from "../../db/fireBase";
import Admin from "../../db/fireBase.admin";

// -------------- DB doc ----------- \\
import chats from "../../db/doc/chats";

// -------------- Utils => Gemini ----------- \\
import {
  useChat,
  messageResponse,
  useGenerateAI,
} from "../../utils/gemini.util";

export default {
  Query: {
    getChats: async (_: any, args: GetChatsTypes) => {
      const { userId } = args;

      try {
        const query = await chats.where("userId", "==", userId).get();
        const allChats = query.docs.map((doc) => {
          return {
            ...doc.data(),
            chatId: doc.id,
          };
        });

        return {
          data: allChats,
        };
      } catch (error) {
        throw error;
      }
    },
    getChatById: async (_: any, args: GetChatByIdTypes) => {
      const { chatId } = args;

      try {
        const query = await chats.doc(chatId).get();
        const chatById = query.data();

        return {
          data: chatById,
        };
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    sendMessage: async (_: any, args: SendMessageTypes) => {
      const { message, chatId, userId } = args.sendMessageInput;

      const docRef = chats.doc();
      const userResponse = messageResponse("user", message);

      try {
        if (!userId)
          return {
            status: false,
            message: "you should sign in system to use chat",
          };

        // ------ send new Generated Text if exist chat
        if (chatId) {
          const existChat = (await chats.doc(chatId).get()).data();

          if (existChat) {
            // generate text by AI
            const { response } = await useChat(existChat.message, message);
            const modelResponse = messageResponse("model", response);

            // save user / Ai message
            await chats.doc(chatId).update({
              message: fireBase.firestore.FieldValue.arrayUnion(
                userResponse,
                modelResponse
              ),
            });

            return {
              data: modelResponse,
            };
          }
        }

        // // ------ create new Chat and send new Generated Text

        // title of Chat
        const { text: titleOfChat } = await useGenerateAI(
          "make short (max 3 words) chat title of",
          message
        );

        // generated text by user prompt
        const { text: chatResponse } = await useGenerateAI("", message);
        const newChatResponse = messageResponse("model", chatResponse);

        // save new Chat
        await docRef.set({
          message: fireBase.firestore.FieldValue.arrayUnion(
            userResponse,
            newChatResponse
          ),
          chatName: titleOfChat,
          userId: userId,
        });

        return {
          data: {
            message: newChatResponse,
            chatId: docRef.id,
            chatName: titleOfChat,
            isNew: true,
          },
        };
      } catch (error) {
        throw error;
      }
    },
    removeChat: async (_: any, args: RemoveChatTypes) => {
      const { chatId } = args;

      try {
        if (!chatId)
          return {
            status: false,
            message: "something wrong with chat ID",
            data: null,
          };

        await chats.doc(chatId).delete();
      } catch (error) {
        throw error;
      }
    },
  },
};
