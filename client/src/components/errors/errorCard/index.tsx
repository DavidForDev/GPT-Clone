// ------------- Types ------------- \\
import { ErrorCardTypes } from "@/types/components.types";

const ErrorCard = ({ data }: ErrorCardTypes) => {
  if (data.length === 0) return;

  return data.map((message) => (
    <div
      className={`absolute top-3 right-3 px-4 py-2 rounded-sm ${
        message.status === true
          ? " bg-green-500"
          : message.status === false
          ? "bg-red-500"
          : "hidden bg-none"
      } text-white text-sm`}
    >
      {message.text}
    </div>
  ));
};

export default ErrorCard;
