"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
require("firebase/compat/messaging");
require("firebase/compat/firestore");
app_1.default.initializeApp({
    apiKey: process.env.DB_API_KEY,
    projectId: process.env.DB_PROJECT_ID,
    projectNumber: process.env.DB_PROJECT_NUMBER,
});
app_1.default
    .firestore()
    .settings({ experimentalAutoDetectLongPolling: true, merge: true });
exports.default = app_1.default;
