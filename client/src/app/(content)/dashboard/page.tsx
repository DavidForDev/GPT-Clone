// ------------ Icons ------------- \\
import OpenAiSvg from "../../../../public/icons/openai";

export default async function Welcome() {
  return (
    <div className="h-full px-5 py-3">
      <div className="flex flex-col h-full w-full items-center">
        <div className="flex flex-1 items-center justify-center flex-col gap-3">
          <OpenAiSvg width={40} height={40} />
          <h3 className="font-medium text-2xl">How can I help you today?</h3>
        </div>
      </div>
    </div>
  );
}
