import admin from "firebase-admin";

const fireBase_Admin = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.SERVICE as string)),
  databaseURL: process.env.DATA_BASE_URL,
});

export default fireBase_Admin;
