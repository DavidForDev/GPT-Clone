"use client";

// ----------- Components ------------ \\
import ModalCard from "./_component/modalCard";
import ErrorCard from "../errors/errorCard";

// ----------- Store => zustand ----------- \\
import { useModal } from "@/store/zustand";

// ----------- contexts ----------- \\
import { useErrorContext } from "@/context/errorContext";

const Modal = ({ modals }: { modals: object[] }) => {
  const { modalId } = useModal();

  const isModal = modals.some((modal: any) => modal.id === modalId);
  const toggledStyle = isModal ? "flex" : "hidden";

  // context
  const { errors } = useErrorContext();

  return (
    <div
      className={` ${toggledStyle} w-full h-full fixed left-0 top-0 z-50 flex items-center justify-center`}
    >
      <div className="absolute w-full h-full bg-black/60 top-0 left-0"></div>
      {modals.map((modal: any) => (
        <ModalCard
          key={modal.id}
          hasModal={isModal}
          title={modal.title}
          context={modal.context}
        />
      ))}
      <ErrorCard data={errors} />
    </div>
  );
};

export default Modal;
