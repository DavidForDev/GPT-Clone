"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fireBase_1 = __importDefault(require("../fireBase"));
exports.default = fireBase_1.default.firestore().collection("chats");
