import ApolloClient from "@/apollo/apollo-client";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// ------------ Schema ----------- \\
import { Query_Schema, Mutation_Schema } from "../schema/users.schema";

// ------------ Types ----------- \\
import { CreateUserTypes } from "@/types/apollo/user.types";
import { useSession } from "@/hooks/useSession";

// Mutation \\
const { createUser, removeAccount } = Mutation_Schema;
// Query \\
const { signIn } = Query_Schema;

export const Query_Request = {
  signIn: async ({ email, password }: CreateUserTypes) => {
    try {
      const { data } = await ApolloClient.query({
        query: signIn,
        variables: {
          signInInput: {
            email,
            password,
          },
        },
      });

      const response = data.signIn;

      if (response.status) {
        const { access_token } = response.data.managerToken;

        cookies.set("token", access_token, { path: "/" });
        location.reload();
      }

      return {
        data: response.data,
        error: {
          text: response.message,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  logOut: async () => {
    try {
      cookies.remove("token");
      location.reload();
    } catch (error) {
      throw error;
    }
  },
};

export const Mutation_Request = {
  createUser: async ({ email, password }: CreateUserTypes) => {
    try {
      const { data } = await ApolloClient.mutate({
        mutation: createUser,
        variables: {
          newUserInput: {
            email,
            password,
          },
        },
      });

      const response = data.createUser;

      if (response.status) {
        const { access_token } = response.data.managerToken;

        cookies.set("token", access_token, { path: "/" });
        location.reload();
      }

      return {
        data: response.data,
        error: {
          text: response.message,
          status: response.status,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  removeAccount: async () => {
    try {
      const { user } = await useSession();

      console.log(user);

      const { data } = await ApolloClient.mutate({
        mutation: removeAccount,
        variables: {
          userId: user.id,
        },
      });

      const response = data.removeAccount;

      if (response.status) {
        cookies.remove("token");
        location.reload();
      }

      return {
        data: response.data,
        error: {
          text: response.message,
          status: response.status,
        },
      };
    } catch (error) {
      throw error;
    }
  },
};
