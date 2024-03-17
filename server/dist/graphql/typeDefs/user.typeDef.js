"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = (0, graphql_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar JSON\n\n  type User {\n    id: String\n    email: String\n  }\n\n  ## ------- Inputs\n  input NewUserInput {\n    email: String\n    password: String\n  }\n\n  input SignInInput {\n    email: String\n    password: String\n  }\n\n  ## ------- Response Types\n  type Response {\n    status: Boolean\n    message: String\n    data: JSON\n  }\n\n  ## ------- Query / Mutation\n  type Query {\n    user(id: String): User\n    signIn(signInInput: SignInInput): Response\n  }\n\n  type Mutation {\n    createUser(newUserInput: NewUserInput): Response\n    removeAccount(userId: String): Response\n  }\n"], ["\n  scalar JSON\n\n  type User {\n    id: String\n    email: String\n  }\n\n  ## ------- Inputs\n  input NewUserInput {\n    email: String\n    password: String\n  }\n\n  input SignInInput {\n    email: String\n    password: String\n  }\n\n  ## ------- Response Types\n  type Response {\n    status: Boolean\n    message: String\n    data: JSON\n  }\n\n  ## ------- Query / Mutation\n  type Query {\n    user(id: String): User\n    signIn(signInInput: SignInInput): Response\n  }\n\n  type Mutation {\n    createUser(newUserInput: NewUserInput): Response\n    removeAccount(userId: String): Response\n  }\n"])));
var templateObject_1;
