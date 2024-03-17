// ------------- Icons ------------- \\
import OpenAiSvg from "../../../../public/icons/openai";

// ------------- Types ------------- \\
import { MessageCardTypes } from "@/types/components.types";

const MessageCard = ({ message, role }: MessageCardTypes) => {
  return (
    <div className="flex py-5 px-4 flex-1 text-base mx-auto gap-3 md:px-5 lg:max-w-[40rem] xl:max-w-[48rem]">
      <div className="flex-shrink-0 flex flex-col relative items-end">
        {role === "model" ? (
          <OpenAiSvg className="w-6 h-6" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-black border border-white border-solid" />
        )}
      </div>
      <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)]">
        <h3 className="capitalize font-bold ">
          {role === "model" ? "chatGPT" : "you"}
        </h3>
        {message === "loading" ? (
          <div className=" mt-2 w-3 h-3 rounded-full bg-white animate-pulse duration-75" />
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
