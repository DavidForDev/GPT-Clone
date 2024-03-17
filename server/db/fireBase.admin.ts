import * as admin from "firebase-admin";

const admin_sdk_service = require("../adminSDK_service.json");

const fireBase_Admin = admin.initializeApp({
  credential: admin.credential.cert(admin_sdk_service),
  databaseURL: process.env.DATA_BASE_URL,
});

export default fireBase_Admin;
