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
exports.messageResponse = exports.useGenerateAI = exports.useChat = void 0;
// -------------- services --------------- \\
const gemini_service_1 = __importDefault(require("../services/gemini.service"));
// --- Chat Factory
/*
    1) takes all messages between user and AI from DB
    2) puts in history

    and helps us to make chain with all messages
*/
const useChat = (dbHistory, message) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = gemini_service_1.default.startChat({
        history: dbHistory,
    });
    const result = yield chat.sendMessage(message);
    const response = result.response;
    return {
        response: response.text(),
    };
});
exports.useChat = useChat;
const useGenerateAI = (introduction, message) => __awaiter(void 0, void 0, void 0, function* () {
    const intro = introduction ? introduction : "";
    const generatedText = yield gemini_service_1.default.generateContent(`${intro} " ${message} "`);
    const response = generatedText.response;
    return {
        text: response.text(),
    };
});
exports.useGenerateAI = useGenerateAI;
// --- Message Response
/*
    for clean code, I use it often so I decided to export it
*/
const messageResponse = (role, parts) => {
    return {
        parts: parts,
        role: role,
    };
};
exports.messageResponse = messageResponse;
