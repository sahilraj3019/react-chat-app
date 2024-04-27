import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-app-in-react-52f0b.firebaseapp.com",
  projectId: "chat-app-in-react-52f0b",
  storageBucket: "chat-app-in-react-52f0b.appspot.com",
  messagingSenderId: "289193048121",
  appId: "1:289193048121:web:eccc2a9a7841b60404f5e8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
