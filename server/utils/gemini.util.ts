// -------------- services --------------- \\
import model from "../services/gemini.service";

// -------------- Types --------------- \\
import { DBHistoryTypes } from "../types/utils/gemini";

// --- Chat Factory
/* 
    1) takes all messages between user and AI from DB
    2) puts in history 

    and helps us to make chain with all messages
*/

export const useChat = async (dbHistory: DBHistoryTypes[], message: string) => {
  try {
    const chat = model.startChat({
      history: dbHistory,
    });

    const result = await chat.sendMessage(message);
    const response = result.response;

    return {
      response: response.text(),
    };
  } catch (error) {
    throw error;
  }
};

export const useGenerateAI = async (introduction: string, message: string) => {
  const intro = introduction ? introduction : "";
  try {
    const generatedText = await model.generateContent(
      `${intro} " ${message} "`
    );
    const response = generatedText.response;

    return {
      text: response.text(),
    };
  } catch (error) {
    throw error;
  }
};

// --- Message Response

/* 
    for clean code, I use it often so I decided to export it
*/

export const messageResponse = (role: string, parts: string) => {
  return {
    parts: parts,
    role: role,
  };
};
