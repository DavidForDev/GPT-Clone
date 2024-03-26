import gql from "graphql-tag";

export default gql`
  scalar JSON

  type User {
    id: String
    email: String
  }

  ## ------- Inputs
  input NewUserInput {
    email: String
    password: String
  }

  input SignInInput {
    email: String
    password: String
  }

  ## ------- Response Types
  type Response {
    status: Boolean
    message: String
    data: JSON
  }

  ## ------- Query / Mutation
  type Query {
    user(id: String): User
    signIn(signInInput: SignInInput): Response
  }

  type Mutation {
    createUser(newUserInput: NewUserInput): Response
    removeAllChat(userId: String): Response
  }
`;
