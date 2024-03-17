export interface SendMessageTypes {
  sendMessageInput: {
    chatId: string;
    message: string;
    userId: string;
  };
}

export interface GetChatsTypes {
  userId: string;
}

export interface GetChatByIdTypes {
  chatId: string;
}

export interface RemoveChatTypes {
  chatId: string;
}
