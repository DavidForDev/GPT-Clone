"use client";

// -------------- Components ------------- \\
import MessageCard from "@/components/chat/message/messageCard";

// -------------- Contexts ------------ \\
import { useChatContext } from "@/context/chatContext";

// -------------- Store => zustand ------------ \\
import { useLoading } from "@/store/zustand";

export default function Chat() {
  const { messages } = useChatContext();
  const { loading } = useLoading();

  return (
    <>
      {messages.map((message: any, index: number) => (
        <MessageCard key={index} message={message.parts} role={message.role} />
      ))}
      {loading ? <MessageCard message="loading" role="model" /> : ""}
    </>
  );
}
