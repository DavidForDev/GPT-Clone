import { create } from "zustand";

// ------------- Types ------------- \\
import {
  UseNewChatTypes,
  UseToggleTypes,
  UseModalTypes,
  UseLoadingTypes,
} from "@/types/store.types";

// ---- Use Toggle

/*
  this toggle function and we use it for open or close navigation, 
  also it has ToggleBySize function
  which allows us to open or close navigation according to website size
*/

export const useToggle = create<UseToggleTypes>((set) => ({
  status: true,
  toggle: () => set((state) => ({ status: !state.status })),
  toggleBySize: (minSize, maxSize) =>
    set((state) => ({ status: minSize < maxSize ? false : true })),
}));

// ---- new Chat

/*
  this logic gives us the opportunity to add chatCard in navigation when
  we receive new chat.
*/

export const useNewChat = create<UseNewChatTypes>((set) => ({
  isNewChat: null,
  setNewChat: (chat) => set((state) => ({ isNewChat: chat })),
}));

// ---- Modal Logic

/* 
  when user click on icon / button, we can pass two arguments
  1. modalId
    which is important to get special modal according to Id
  2. action
    submit function, which allows us to make 
    request or some logic when we click on submit button of modal
*/

export const useModal = create<UseModalTypes>((set) => ({
  modalId: "",
  submit: () => {},
  onToggle: (modalId, action) =>
    set((state) => ({ modalId: state.modalId ? "" : modalId, submit: action })),
}));

// ---- Loading Logic

export const useLoading = create<UseLoadingTypes>((set) => ({
  loading: false,
  setLoading: (status) => set((state) => ({ loading: status })),
}));
