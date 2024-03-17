"use client";

import { useLayoutEffect, useRef } from "react";
import { useParams } from "next/navigation";

// ------------- Components ------------ \\
import ChatFooter from "./chatFooter";
import MobileNavigation from "../navigation/mobile";

// ------------- Contexts ------------ \\
import { useChatContext } from "@/context/chatContext";

// ------------- Apollo => request ------------ \\
import { Query_Request } from "@/apollo/operations/requests/chat.request";
import { useEffect } from "react";

const ChatDisplay = ({ userId, children }: any) => {
  const { setMessages, messages } = useChatContext();

  const router = useParams();

  // Apollo
  const { getChatById } = Query_Request;

  /* Get data by Chat Id */
  useEffect(() => {
    if (router.chatId) {
      getChatById({ chatId: router.chatId[0] as string }).then((res) => {
        if (res.data.message) {
          setMessages(res.data.message);
        }
      });
    }
  }, [router.chatId]);

  /* use to scroll thumb be always down */
  const chatRef = useRef<HTMLDivElement | any>();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, children, router.chatId]);

  return (
    <div className="w-full h-full relative flex flex-col">
      <main className="w-full overflow-auto">
        <MobileNavigation className="sticky top-0 z-40" />
      </main>
      <div className="flex-1 overflow-auto" ref={chatRef}>
        {children}
      </div>
      <footer className="text-base w-full py-3 px-4 md:px-0 flex flex-col gap-2 bg-transparent max-w-3xl m-auto">
        <ChatFooter
          chatId={router.chatId ? (router.chatId[0] as string) : undefined}
          userId={userId}
          setMessage={setMessages}
          warningInfo="ChatGPT can make mistakes. Consider checking important information."
        />
      </footer>
    </div>
  );
};

export default ChatDisplay;
