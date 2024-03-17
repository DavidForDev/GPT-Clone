import fireBase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";

fireBase.initializeApp({
  apiKey: process.env.DB_API_KEY,
  projectId: process.env.DB_PROJECT_ID,
  projectNumber: process.env.DB_PROJECT_NUMBER,
});

fireBase
  .firestore()
  .settings({ experimentalAutoDetectLongPolling: true, merge: true });

export default fireBase;
