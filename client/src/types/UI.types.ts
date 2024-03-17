import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  status?: boolean;
}

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  setValue?: SetStateAction<any>;
  sendClick?: () => void;
}
