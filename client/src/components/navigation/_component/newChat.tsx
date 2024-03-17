import Link from "next/link";
import { redirect } from "next/navigation";

// -------------- UI -------------- \\
import SecondaryButton from "@/components/UI/buttons/button.secondry";

// -------------- Icons -------------- \\
import OpenAiSvg from "../../../../public/icons/openai";
import PenSvg from "../../../../public/icons/pen";

const NewChatButton = () => {
  return (
    <Link href="/dashboard">
      <SecondaryButton className="font-bold justify-between">
        <div className="flex items-center gap-3">
          <OpenAiSvg width={25} height={25} />
          <p>new chat</p>
        </div>
        <PenSvg />
      </SecondaryButton>
    </Link>
  );
};

export default NewChatButton;
