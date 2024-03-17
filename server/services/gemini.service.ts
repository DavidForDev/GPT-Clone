import { GoogleGenerativeAI } from "@google/generative-ai";

export const openAi = new GoogleGenerativeAI(process.env.OPENAI_KEY as string);
export const generationConfig = {
  temperature: 0.4,
  topP: 0,
  topK: 1,
  maxOutputTokens: 2000,
};

const model = openAi.getGenerativeModel({
  model: "gemini-pro",
  generationConfig,
});

export default model;
