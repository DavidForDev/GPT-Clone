import ApolloClient from "@/apollo/apollo-client";

// ------------ Schema ----------- \\
import { Mutation_Schema, Query_Schema } from "../schema/chat.schema";

// ------------ Types ----------- \\
import { SendMessageTypes } from "@/types/apollo/chat.types";

// ------------ Hooks ----------- \\
import { useSession } from "@/hooks/useSession";

// Mutation \\
const { sendMessage, removeChat } = Mutation_Schema;

// Query \\
const { getChats, getChatById } = Query_Schema;

export const Query_Request = {
  getChats: async () => {
    try {
      const { user } = await useSession();

      const { data } = await ApolloClient.query({
        query: getChats,
        variables: {
          userId: user.id,
        },
      });

      const response = data.getChats;

      return {
        data: response.data,
        error: {
          text: response.message,
          status: response.status,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  getChatById: async ({ chatId }: { chatId: string }) => {
    try {
      const { data } = await ApolloClient.query({
        query: getChatById,
        variables: {
          chatId: chatId,
        },
      });

      const response = data.getChatById;

      return {
        data: response.data,
        error: {
          text: response.message,
          status: response.status,
        },
      };
    } catch (error) {
      throw error;
    }
  },
};

export const Mutation_Request = {
  sendMessage: async ({ message, userId, chatId }: SendMessageTypes) => {
    try {
      const { data } = await ApolloClient.mutate({
        mutation: sendMessage,
        variables: {
          sendMessageInput: {
            message: message,
            chatId: chatId,
            userId: userId,
          },
        },
      });

      const response = data.sendMessage;

      return {
        data: response.data,
        error: {
          text: response.message,
          status: response.status,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  removeChat: async ({ chatId }: { chatId: string }) => {
    try {
      const { data } = await ApolloClient.mutate({
        mutation: removeChat,
        variables: {
          chatId,
        },
      });

      const response = data.removeChat;

      return {
        error: {
          text: response ? response.message : "",
          status: response ? response.status : "",
        },
      };
    } catch (error) {
      throw error;
    }
  },
};
