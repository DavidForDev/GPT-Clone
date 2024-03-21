import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

const { PRIVATE_KEY, DB_PROJECT_ID, CLIENT_EMAIL } = process.env;

const fireBase_Admin = admin.initializeApp({
  credential: cert({
    privateKey: PRIVATE_KEY?.replace(/\\n/g, "\n"),
    projectId: DB_PROJECT_ID,
    clientEmail: CLIENT_EMAIL,
  }),
  databaseURL: process.env.DATA_BASE_URL,
});

export default fireBase_Admin;
