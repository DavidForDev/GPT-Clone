import {
  AllHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

export interface DashboardDisplayTypes {
  children: ReactNode;
}

export interface MobileNavigationTypes extends HTMLAttributes<HTMLDivElement> {
  burgerClick?: () => void;
}

export interface NavigatonTypes {
  onBurger?: () => void;
}

export interface ChatCardTypes {
  chatId: string;
  chatName: string;
  removedChat: SetStateAction<any>;
}

export interface ModalCardTypes {
  hasModal: boolean;
  title: string;
  context: string;
}

export interface MessageCardTypes {
  message: string;
  role: string;
}

export interface FooterMenuTypes {
  data: {
    onClick: () => void;
    icon: any;
    name: string;
  }[];
}

export interface ErrorCardTypes {
  data: {
    text: string;
    status: boolean;
  }[];
}
