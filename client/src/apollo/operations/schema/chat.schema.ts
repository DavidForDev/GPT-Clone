import gql from "graphql-tag";

export const Query_Schema = {
  getChats: gql`
    query GetChats($userId: String) {
      getChats(userId: $userId) {
        status
        message
        data
      }
    }
  `,
  getChatById: gql`
    query GetChatById($chatId: String) {
      getChatById(chatId: $chatId) {
        status
        message
        data
      }
    }
  `,
};

export const Mutation_Schema = {
  sendMessage: gql`
    mutation SendMessage($sendMessageInput: SendMessageInput) {
      sendMessage(sendMessageInput: $sendMessageInput) {
        status
        message
        data
      }
    }
  `,
  removeChat: gql`
    mutation RemoveChat($chatId: String) {
      removeChat(chatId: $chatId) {
        status
        message
        data
      }
    }
  `,
};
