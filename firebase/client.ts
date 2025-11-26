import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1xwb-ygSH85sKRZ8DamYTzPcyhB4obC4",
  authDomain: "interviewprep-629a8.firebaseapp.com",
  projectId: "interviewprep-629a8",
  storageBucket: "interviewprep-629a8.firebasestorage.app",
  messagingSenderId: "392676451488",
  appId: "1:392676451488:web:506d029ba34558983895c5",
  measurementId: "G-KPYY7E4CB1",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
