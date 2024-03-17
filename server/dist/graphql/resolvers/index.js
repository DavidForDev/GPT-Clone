"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_resolver_1 = __importDefault(require("./user.resolver"));
var chat_resolver_1 = __importDefault(require("./chat.resolver"));
exports.default = [user_resolver_1.default, chat_resolver_1.default];
