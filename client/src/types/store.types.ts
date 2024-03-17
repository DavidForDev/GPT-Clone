export interface UseToggleTypes {
  status: boolean;
  toggle: () => void;
  toggleBySize: (size: number) => void;
}

export interface UseNewChatTypes {
  isNewChat: object | null;
  setNewChat: (chat: object) => void;
}

export interface UseModalTypes {
  modalId: string;
  submit: () => void;
  onToggle: (modalId?: string, action?: () => void) => void;
}

export interface UseLoadingTypes {
  loading: boolean;
  setLoading: (status: boolean) => void;
}
