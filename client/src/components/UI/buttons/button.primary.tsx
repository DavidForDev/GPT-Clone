// ------------ Types of UI ------------- \\
import { ButtonTypes } from "@/types/UI.types";

const PrimaryButton = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className="bg-[#0FA47F] w-full text-nowrap rounded-md text-sm text-white py-3 px-4 capitalize"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
