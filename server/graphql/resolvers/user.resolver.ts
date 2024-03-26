// ------------ Types ------------- \\
import {
  UserType,
  CreateUserTypes,
  SignInTypes,
  RemoveAccountTypes,
} from "../../types/resolvers/users";

// ------------ FireBase ------------- \\
import FireBase from "../../db/fireBase";
import Admin from "../../db/fireBase.admin";

// ------------ FireBase => doc ------------- \\
import chats from "../../db/doc/chats";

export default {
  Query: {
    user: async (_: any, args: UserType) => {
      const { id } = args;

      try {
        if (!id) throw new Error("cant find user");

        const user = FireBase.auth();

        return user;
      } catch (error) {
        throw error;
      }
    },
    signIn: async (_: any, args: SignInTypes) => {
      const { email, password } = args.signInInput;

      try {
        if (!password || !email) {
          return {
            status: false,
            message: "please fill all fields!",
          };
        }

        // Auth User
        return FireBase.auth()
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            const authUser = auth.user;

            return auth.user?.getIdToken().then((token) => {
              const userInfo = {
                id: authUser?.uid,
                email: authUser?.email,
                managerToken: {
                  refresh_token: authUser?.refreshToken,
                  access_token: token,
                },
              };

              return {
                status: true,
                data: userInfo,
              };
            });
          })
          .catch((errors) => {
            return {
              status: false,
              message: errors.message,
            };
          });
      } catch (error) {
        return {
          status: false,
          message: error,
        };
      }
    },
  },
  Mutation: {
    createUser: async (_: any, args: CreateUserTypes) => {
      const { email, password } = args.newUserInput;

      try {
        if (!email || !password) {
          return {
            status: false,
            message: "please fill all fields!",
          };
        }

        // check Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const checkEmail = emailRegex.test(email);

        if (!checkEmail) {
          return {
            status: false,
            message: "email format is wrong!",
          };
        }

        if (password.length < 8) {
          return {
            status: false,
            message: "password min symbol should be 8 length",
          };
        }

        // Create User
        return FireBase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then((data) => {
            return data.user?.getIdToken().then((token) => {
              const userInfo = {
                id: data.user?.uid,
                email: data.user?.email,
                managerToken: {
                  refresh_token: data.user?.refreshToken,
                  access_token: token,
                },
              };

              return {
                status: true,
                message: "account created succesfuly",
                data: userInfo,
              };
            });
          })
          .catch((err) => {
            if (err) {
              return {
                status: false,
                message: "such user arleady uses such email",
              };
            }
          });
      } catch (error) {
        throw error;
      }
    },
    removeAccount: async (_: any, args: RemoveAccountTypes) => {
      const { userId } = args;

      try {
        if (!userId)
          return {
            status: false,
            message: "can't find userId",
          };

        // remove Chats
        const chatArray = await chats.where("userId", "==", userId).get();

        return chatArray.docs.map(async (doc) => {
          await chats.doc(doc.id).delete();

          await Admin.auth().deleteUser(userId);

          return {
            status: true,
            message: "removed succesfuly",
          };
        });
      } catch (error) {
        throw error;
      }
    },
  },
};
