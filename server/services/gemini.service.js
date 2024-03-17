"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generationConfig = exports.openAi = void 0;
const generative_ai_1 = require("@google/generative-ai");
exports.openAi = new generative_ai_1.GoogleGenerativeAI(process.env.OPENAI_KEY);
exports.generationConfig = {
    temperature: 0.4,
    topP: 0,
    topK: 1,
    maxOutputTokens: 2000,
};
const model = exports.openAi.getGenerativeModel({
    model: "gemini-pro",
    generationConfig: exports.generationConfig,
});
exports.default = model;
