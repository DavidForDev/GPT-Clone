"use client";
import { useLayoutEffect } from "react";

// ------------- Components ------------- \\
import Navigation from "@/components/navigation";
import MobileNavigation from "@/components/navigation/mobile";

// ------------- UI ------------- \\
import ToggleButton from "@/components/UI/buttons/toggleButton";

// ------------- Types ------------- \\
import { DashboardDisplayTypes } from "@/types/components.types";

// ------------- Store ------------- \\
import { useToggle } from "@/store/zustand";

const DashboardDisplay = ({ children }: DashboardDisplayTypes) => {
  const { status, toggle, toggleBySize } = useToggle();

  // use for responsive
  const toggleNavigation = status ? "md:!w-[260px]" : "!w-0";

  useLayoutEffect(() => {
    window.addEventListener("resize", (x) =>
      toggleBySize(window.innerWidth, 840)
    );

    return () =>
      window.removeEventListener("resize", () =>
        toggleBySize(window.innerWidth, 840)
      );
  }, []);

  return (
    <>
      <header
        className={`${toggleNavigation} w-full max-w-lg md:max-w-sm h-full overflow-auto z-40 left-0 absolute md:relative`}
      >
        <Navigation onBurger={toggle} />
      </header>
      <main className="flex-1 h-full box-border relative">
        <MobileNavigation className="absolute top-0" />
        <ToggleButton
          onClick={toggle}
          status={status}
          className="absolute left-0 top-[45%] hidden md:block z-40"
        />

        {children}
      </main>
    </>
  );
};

export default DashboardDisplay;
