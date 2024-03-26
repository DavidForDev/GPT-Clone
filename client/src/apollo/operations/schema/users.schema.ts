import gql from "graphql-tag";

export const Query_Schema = {
  signIn: gql`
    query SignIn($signInInput: SignInInput) {
      signIn(signInInput: $signInInput) {
        status
        data
        message
      }
    }
  `,
};

export const Mutation_Schema = {
  createUser: gql`
    mutation createUser($newUserInput: NewUserInput) {
      createUser(newUserInput: $newUserInput) {
        status
        message
        data
      }
    }
  `,
  removeAccount: gql`
    mutation RemoveAllChat($userId: String) {
      removeAllChat(userId: $userId) {
        status
        message
      }
    }
  `,
};
