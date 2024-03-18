import admin from "firebase-admin";

const fireBase_Admin = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY
      ? JSON.parse(process.env.PRIVATE_KEY)
      : undefined,
  }),
  databaseURL: process.env.DATA_BASE_URL,
});

export default fireBase_Admin;
