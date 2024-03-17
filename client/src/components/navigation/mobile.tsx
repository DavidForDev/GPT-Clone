"use client";

// ------------- Types ------------- \\
import { MobileNavigationTypes } from "@/types/components.types";

// ------------- Icons ------------- \\
import BurgerSvg from "../../../public/icons/burger";

// ------------- Zustand ------------ \\
import { useToggle } from "@/store/zustand";

const MobileNavigation = ({ burgerClick, ...props }: MobileNavigationTypes) => {
  // zustand
  const { toggle } = useToggle();

  return (
    <nav
      {...props}
      className={`${props.className} p-2 px-5 h-14 flex justify-between items-center border-b border-[#343436] md:border-none w-full bg-transparent`}
    >
      <BurgerSvg
        width={25}
        height={25}
        stroke="white"
        className="md:hidden block cursor-pointer"
        onClick={toggle}
      />
      <h3 className="capitalize text-lg font-bold">
        chatGPT <span className="text-[#cdcdcd]">3.5</span>
      </h3>
    </nav>
  );
};

export default MobileNavigation;
