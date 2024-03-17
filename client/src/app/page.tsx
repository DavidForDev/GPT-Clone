import Link from "next/link";

// ------------ UI ------------- \\
import PrimaryButton from "@/components/UI/buttons/button.primary";

// ------------ Icons ------------- \\
import OpenAiSvg from "../../public/icons/openai";

export default function Home() {
  return (
    <body className="w-full h-full">
      <div className="h-full bg-[#343541] flex flex-col items-center justify-center gap-3">
        <OpenAiSvg />
        <div className="flex flex-col gap-2 text-center">
          <p className="text-white">Welcome to ChatGPT</p>
          <p className="text-white">
            Log in with your OpenAI account to continue
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/sign-in">
            <PrimaryButton>log in</PrimaryButton>
          </Link>
          <Link href="/sign-up">
            <PrimaryButton>sign up</PrimaryButton>
          </Link>
        </div>
      </div>
    </body>
  );
}
