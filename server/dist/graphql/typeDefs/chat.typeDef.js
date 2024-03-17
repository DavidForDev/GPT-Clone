"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = (0, graphql_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar JSON\n\n  type Chat {\n    id: String\n    name: String\n  }\n\n  ## ------- Inputs\n  input SendMessageInput {\n    chatId: String\n    message: String\n    userId: String\n  }\n\n  ## ------- Query / Mutation\n  type Query {\n    getChats(userId: String): Response\n    getChatById(chatId: String): Response\n  }\n\n  type Mutation {\n    sendMessage(sendMessageInput: SendMessageInput): Response\n    removeChat(chatId: String): Response\n  }\n"], ["\n  scalar JSON\n\n  type Chat {\n    id: String\n    name: String\n  }\n\n  ## ------- Inputs\n  input SendMessageInput {\n    chatId: String\n    message: String\n    userId: String\n  }\n\n  ## ------- Query / Mutation\n  type Query {\n    getChats(userId: String): Response\n    getChatById(chatId: String): Response\n  }\n\n  type Mutation {\n    sendMessage(sendMessageInput: SendMessageInput): Response\n    removeChat(chatId: String): Response\n  }\n"])));
var templateObject_1;
