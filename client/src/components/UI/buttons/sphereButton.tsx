// ------------ Types of UI ------------- \\
import { ButtonTypes } from "@/types/UI.types";

const SphereButton = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-[#171717] p-1 rounded-lg`}
    >
      {children}
    </button>
  );
};

export default SphereButton;
