"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = (0, graphql_tag_1.default) `
  scalar JSON

  type Chat {
    id: String
    name: String
  }

  ## ------- Inputs
  input SendMessageInput {
    chatId: String
    message: String
    userId: String
  }

  ## ------- Query / Mutation
  type Query {
    getChats(userId: String): Response
    getChatById(chatId: String): Response
  }

  type Mutation {
    sendMessage(sendMessageInput: SendMessageInput): Response
    removeChat(chatId: String): Response
  }
`;
