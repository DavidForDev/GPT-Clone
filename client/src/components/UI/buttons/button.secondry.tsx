// ------------ Types of UI ------------- \\
import { ButtonTypes } from "@/types/UI.types";

const SecondaryButton = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className={`${props.className} flex items-center gap-3 text-start hover:bg-[#262626] w-full rounded-md text-sm text-white p-2 capitalize`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
