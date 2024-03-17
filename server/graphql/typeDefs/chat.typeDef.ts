import gql from "graphql-tag";

export default gql`
  scalar JSON

  type Chat {
    id: String
    name: String
  }

  ## ------- Inputs
  input SendMessageInput {
    chatId: String
    message: String
    userId: String
  }

  ## ------- Query / Mutation
  type Query {
    getChats(userId: String): Response
    getChatById(chatId: String): Response
  }

  type Mutation {
    sendMessage(sendMessageInput: SendMessageInput): Response
    removeChat(chatId: String): Response
  }
`;
