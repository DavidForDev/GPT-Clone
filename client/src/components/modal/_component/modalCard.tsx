"use client";

// ------------- UI -------------- \\
import PrimaryButton from "../../UI/buttons/button.primary";

// ------------- Types -------------- \\
import { ModalCardTypes } from "@/types/components.types";

// ------------- Store => zustand -------------- \\
import { useModal } from "@/store/zustand";

const ModalCard = ({ title, context, hasModal }: ModalCardTypes) => {
  if (!hasModal) return;

  // Zustand
  const { onToggle, submit } = useModal();

  const submitHandle = () => {
    submit();

    // after submit we should close ModalCard
    onToggle();
  };

  return (
    <div className="bg-[#2f2f2f] rounded-xl absolute z-30 max-w-md w-full">
      <header className="p-5 border-b border-[#444444] border-solid">
        <h3 className="first-letter:uppercase font-bold text-lg">{title}</h3>
      </header>
      <main className="p-5 flex flex-col gap-5">
        <h3 className="capitalize">{context}</h3>
        <div className="flex items-center gap-3 max-w-48 self-end">
          <PrimaryButton
            style={{ background: "transparent", border: "1px solid #444444" }}
            onClick={() => onToggle()}
          >
            cancel
          </PrimaryButton>
          <PrimaryButton
            style={{ background: "#b91c1c" }}
            onClick={submitHandle}
          >
            submit
          </PrimaryButton>
        </div>
      </main>
    </div>
  );
};

export default ModalCard;
