"use client";

import { useEffect, useState } from "react";

// ------------- Components ------------ \\
import ChatCard from "./_component/chatCard";
import NewChatButton from "./_component/newChat";
import ToggleNavigation from "./_component/closer";
import FooterMenu from "./_component/footer";

// ------------- Icons ------------ \\
import OpenAiSvg from "../../../public/icons/openai";
import LogoutSvg from "../../../public/icons/logout";

// ------------- Store => zustand ------------ \\
import { useModal, useNewChat } from "@/store/zustand";

// ------------- Types ------------ \\
import { NavigatonTypes } from "@/types/components.types";

// ------------- Apollo => Query ------------ \\
import {
  Query_Request as User_Query_Request,
  Mutation_Request as User_Mutation_Request,
} from "@/apollo/operations/requests/user.request";

import { Query_Request as Chat_Query_Request } from "@/apollo/operations/requests/chat.request";

const Navigation = ({ onBurger }: NavigatonTypes) => {
  const [chats, setChats] = useState<object[]>([]);

  // Apollo
  const { logOut } = User_Query_Request;
  const { removeAccount } = User_Mutation_Request;
  const { getChats } = Chat_Query_Request;

  // zustand store
  const { isNewChat } = useNewChat();

  // zustand => modal
  const { onToggle } = useModal();

  // get initial Chats
  useEffect(() => {
    getChats().then((chat) => {
      setChats(chat.data);
    });
  }, []);

  // get new Chat
  useEffect(() => {
    if (isNewChat !== null) {
      setChats([...chats, isNewChat]);
    }
  }, [isNewChat]);

  const footerDB = [
    {
      name: "remove account",
      icon: <OpenAiSvg width={18} height={18} />,
      onClick: () => onToggle("rm-account", removeAccount),
    },
    {
      name: "log out",
      icon: <LogoutSvg width={18} height={18} />,
      onClick: logOut,
    },
  ];

  return (
    <div className="w-full h-full flex items-start flex-row-reverse z-50">
      <ToggleNavigation onBurger={onBurger} />

      <nav className="h-full w-full flex-[1_1_70%] bg-[#171717] py-3 px-1 text-white flex flex-col z-50 md:relative">
        <main className="flex-[2_0_80%] overflow-auto px-2 ">
          <div className="bg-[#171717] rounded-md sticky top-1">
            <NewChatButton />
          </div>
          <ul className="pt-8 flex flex-col gap-3">
            {chats.map((el: any) => (
              <ChatCard
                key={el.chatId}
                chatId={el.chatId}
                chatName={el.chatName}
                removedChat={setChats}
              />
            ))}
          </ul>
        </main>
        <footer className="flex-[1_0_20%] px-2 flex flex-col justify-end gap-2">
          <FooterMenu data={footerDB} />
        </footer>
      </nav>
    </div>
  );
};

export default Navigation;
