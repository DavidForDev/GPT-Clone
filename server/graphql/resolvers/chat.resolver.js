"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// -------------- DB ----------- \\
const fireBase_1 = __importDefault(require("../../db/fireBase"));
const fireBase_admin_1 = __importDefault(require("../../db/fireBase.admin"));
// -------------- DB doc ----------- \\
const chats_1 = __importDefault(require("../../db/doc/chats"));
// -------------- Utils => Gemini ----------- \\
const gemini_util_1 = require("../../utils/gemini.util");
exports.default = {
    Query: {
        getChats: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { userId } = args;
            try {
                const query = yield chats_1.default.where("userId", "==", userId).get();
                const allChats = query.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { chatId: doc.id });
                });
                return {
                    data: allChats,
                };
            }
            catch (error) {
                throw error;
            }
        }),
        getChatById: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { chatId } = args;
            try {
                const query = yield chats_1.default.doc(chatId).get();
                const chatById = query.data();
                return {
                    data: chatById,
                };
            }
            catch (error) {
                throw error;
            }
        }),
    },
    Mutation: {
        sendMessage: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { message, chatId, userId } = args.sendMessageInput;
            const docRef = chats_1.default.doc();
            const userResponse = (0, gemini_util_1.messageResponse)("user", message);
            const currentUser = fireBase_admin_1.default.auth().getUser(userId);
            try {
                if (!userId || !currentUser)
                    return {
                        status: false,
                        message: "you should sign in system to use chat",
                    };
                // ------ send new Generated Text if exist chat
                if (chatId) {
                    const existChat = (yield chats_1.default.doc(chatId).get()).data();
                    if (existChat) {
                        // generate text by AI
                        const { response } = yield (0, gemini_util_1.useChat)(existChat.message, message);
                        const modelResponse = (0, gemini_util_1.messageResponse)("model", response);
                        // save user / Ai message
                        yield chats_1.default.doc(chatId).update({
                            message: fireBase_1.default.firestore.FieldValue.arrayUnion(userResponse, modelResponse),
                        });
                        return {
                            status: true,
                            data: modelResponse,
                        };
                    }
                }
                // ------ create new Chat and send new Generated Text
                // title of Chat
                const { text: titleOfChat } = yield (0, gemini_util_1.useGenerateAI)("make short (max 3 words) chat title of", message);
                // generated text by user prompt
                const { text: chatResponse } = yield (0, gemini_util_1.useGenerateAI)("", message);
                const newChatResponse = (0, gemini_util_1.messageResponse)("model", chatResponse);
                // save new Chat
                yield docRef.set({
                    message: fireBase_1.default.firestore.FieldValue.arrayUnion(userResponse, newChatResponse),
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
            }
            catch (error) {
                throw error;
            }
        }),
        removeChat: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { chatId } = args;
            try {
                if (!chatId)
                    return {
                        status: false,
                        message: "something wrong with chat ID",
                        data: null,
                    };
                yield chats_1.default.doc(chatId).delete();
            }
            catch (error) {
                throw error;
            }
        }),
    },
};
