"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// ------------- UI -------------- \\
import SecondaryButton from "@/components/UI/buttons/button.secondry";

// ------------- Icons -------------- \\
import ChatSvg from "../../../../public/icons/chat";
import BinSvg from "../../../../public/icons/bin";

// ------------- Hooks -------------- \\
import { useShort } from "@/hooks/useShort";

// ------------- Types -------------- \\
import { ChatCardTypes } from "@/types/components.types";

// ------------- Apollo => request -------------- \\
import { Mutation_Request } from "@/apollo/operations/requests/chat.request";

// ------------- state => zustand -------------- \\
import { useModal } from "@/store/zustand";

// ------------- Context -------------- \\
import { useErrorContext } from "@/context/errorContext";

const ChatCard = ({ chatId, chatName, removedChat }: ChatCardTypes) => {
  const router = useRouter();

  // Apollo
  const { removeChat } = Mutation_Request;

  // zustand
  const { onToggle } = useModal();

  // context
  const { setErrors } = useErrorContext();

  const removeChatHandle = async () => {
    const { error } = await removeChat({ chatId });

    setErrors((prev: any) => [...prev, error]);

    removedChat((prev: any) => {
      const removed = prev.filter((chat: any) => chat.chatId !== chatId);
      return removed;
    });

    router.replace("/dashboard");
  };

  return (
    <SecondaryButton className="justify-between group">
      <Link href={`/chat/${chatId}`} className="flex-1">
        <p className="w-full">{useShort(chatName, 21)}</p>
      </Link>
      <h3 className="hidden group-hover:block">
        <BinSvg onClick={() => onToggle("rm-chat", removeChatHandle)} />
      </h3>
    </SecondaryButton>
  );
};

export default ChatCard;
