// ------------ Types ------------ \\
import { ButtonTypes } from "@/types/UI.types";

const ToggleButton = ({ status, ...props }: ButtonTypes) => {
  const firstLine = !status ? "!-rotate-12 bg-white" : "group-hover:rotate-12";

  const secondLine = !status ? "!rotate-12 bg-white" : "group-hover:-rotate-12";

  return (
    <button
      {...props}
      className={`${props.className} w-8 h-8 group cursor-pointer`}
    >
      <div
        className={`w-1 h-3 m-auto bg-[#4e4e4e] group-hover:translate-y-0.5 ${firstLine} rounded-t-xl transition-all group-hover:bg-white`}
      ></div>
      <div
        className={`w-1 h-3 m-auto bg-[#4e4e4e]  group-hover:-translate-y-0.5 ${secondLine} rounded-b-xl transition-all group-hover:bg-white`}
      ></div>
    </button>
  );
};

export default ToggleButton;
