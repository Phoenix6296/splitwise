import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOKscv_76_54Pst4JIT3Qa_dIq7Q9s6Eg",
  authDomain: "my-splitwise.firebaseapp.com",
  projectId: "my-splitwise",
  storageBucket: "my-splitwise.appspot.com",
  messagingSenderId: "12786622625",
  appId: "1:12786622625:web:f3f97e4431243c6e5e90e0",
  measurementId: "G-732M5XSX3Y",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
