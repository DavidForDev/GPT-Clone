"use client";

import {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// ------------ Components ------------- \\
import ChatDisplay from "@/components/chat";

const ChatContext = createContext<any>(null);

export const ChatProvider = ({
  children,
  userId,
}: {
  children: ReactNode;
  userId: string;
}) => {
  const [messages, setMessages] = useState<object[]>([]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      <ChatDisplay userId={userId}>{children}</ChatDisplay>
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
};
