import Link from "next/link";

// ----------- Icons ------------ \\
import OpenAiSvg from "../../../public/icons/openai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="h-full">
      <div className="w-full h-full flex flex-col items-center">
        <div className="p-3">
          <OpenAiSvg color="#202123" />
        </div>

        <div className="flex items-center justify-center flex-col gap-4 max-w-xs w-full h-full">
          <h3 className="capitalize text-3xl font-bold">welcome back</h3>
          <div className="flex flex-col gap-5 w-full">{children}</div>
          <p className="text-sm">
            Do you have an account?{" "}
            <Link href="/sign-in" className=" text-blue-500">
              login
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
}
