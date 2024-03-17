"use client";
import { useEffect, useState } from "react";

// ------------ Types of UI ------------- \\
import { InputTypes } from "@/types/UI.types";

const PrimaryInput = ({ labelName, setValue, type, ...props }: InputTypes) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const afterFocused = focus ? "-translate-y-6 -translate-x-2" : "";

  useEffect(() => {
    setValue(content);
  }, [content]);

  return (
    <div className="rounded-md border border-[#0FA47F] py-3 px-4 w-full relative flex justify-start items-center">
      <p
        className={`absolute capitalize bg-white text-[#0FA47F] text-sm transition-all ${afterFocused}`}
        onClick={() => setFocus(true)}
      >
        {!focus
          ? content
            ? type !== "password"
              ? content
              : "************"
            : labelName
          : labelName}
      </p>
      <input
        {...props}
        type={type}
        className="w-full outline-none text-sm "
        style={{ color: focus ? "black" : "white" }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(input) => setContent(input.target.value)}
      />
    </div>
  );
};

export default PrimaryInput;
