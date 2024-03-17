"use client";

import { useEffect, useState } from "react";

// ------------ Types of UI ------------- \\
import { InputTypes } from "@/types/UI.types";

// ------------ UI ------------- \\
import SphereButton from "@/components/UI/buttons/sphereButton";

// ------------ Icon ------------- \\
import TopArrowSvg from "../../../../public/icons/topArrow";

const SecondaryInput = ({
  labelName,
  sendClick,
  setValue,
  ...props
}: InputTypes) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <div
      className={`${props.className} w-full border border-solid border-[#343436] rounded-2xl px-4 py-2  gap-4 flex items-center justify-between`}
    >
      <input
        {...props}
        onChange={(input) => setInputValue(input.target.value)}
        className="w-full bg-transparent outline-none capitalize placeholder:text-[#8b8b8b]"
      />
      <SphereButton
        className={`${inputValue ? "bg-white" : "bg-[#2f2f2f]"}`}
        disabled={!inputValue}
        onClick={sendClick}
      >
        <TopArrowSvg stroke="#181818" />
      </SphereButton>
    </div>
  );
};

export default SecondaryInput;
