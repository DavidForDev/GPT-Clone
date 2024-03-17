"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

// ----------- UI ------------ \\
import SecondaryInput from "@/components/UI/inputs/input.secondary";

// ----------- Components ------------ \\
import ErrorCard from "../errors/errorCard";

// ----------- Apollo => request ------------ \\
import { Mutation_Request } from "@/apollo/operations/requests/chat.request";

// ----------- Store => zustand ------------ \\
import { useNewChat, useLoading } from "@/store/zustand";

// ----------- context ------------ \\
import { useChatContext } from "@/context/chatContext";
import { useErrorContext } from "@/context/errorContext";

const ChatFooter = ({
  warningInfo,
  chatId,
  userId,
  setMessage,
}: {
  warningInfo?: string;
  chatId?: string;
  userId?: string;
  setMessage?: SetStateAction<any>;
}) => {
  const [prompt, setPrompt] = useState<any>("");

  const router = useRouter();

  // Apollo
  const { sendMessage } = Mutation_Request;

  // zustand store
  const { setNewChat } = useNewChat();
  const { setLoading } = useLoading();

  // context
  const { setMessages } = useChatContext();
  const { errors, setErrors } = useErrorContext();

  const sendMessageHandle = async () => {
    // user
    const userText = {
      parts: prompt,
      role: "user",
    };

    /* before we get new Chat Id, user should be redirected chat isolation */
    if (!chatId) {
      setMessages([]);
      router.push("/chat");
    }

    /*
      1) set real-time user prompt
      2) after send remove prompt from input
      3) set Loading status to turn on loading component
    */
    setMessage((prev: any) => [...prev, userText]);
    setPrompt("");
    setLoading(true);

    // send prompt
    const { data, error } = await sendMessage({
      message: userText.parts,
      chatId: chatId,
      userId: userId as string,
    });

    // if there is error we display it
    setErrors((prev: any) => [...prev, error]);

    /*
      if response has ChatId that means there is no error
      so, we remove all messages which was in isolation
      and push chatId as param
    */
    if (data?.chatId) {
      router.push(`/chat/${data.chatId}`);
    }

    // if chat is New, it should pushed into the navigation chat lists
    if (data?.isNew) {
      setNewChat(data);
    }

    // finally, we push the generated data and we turn off the loading status
    setMessage((prev: any) => [...prev, data]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <SecondaryInput
        labelName="hello"
        placeholder="message chatGPT..."
        value={prompt}
        setValue={setPrompt}
        sendClick={sendMessageHandle}
      />
      <p className="text-xs text-[#cdcdcd] text-center">{warningInfo}</p>
      <ErrorCard data={errors} />
    </div>
  );
};

export default ChatFooter;
