"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = (0, graphql_tag_1.default) `
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
    removeAccount(userId: String): Response
  }
`;
