import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHui2ha4EuH5ZZDwMslVnmOevadG6pkvI",
  authDomain: "voice-virtuoso.firebaseapp.com",
  projectId: "voice-virtuoso",
  storageBucket: "voice-virtuoso.firebasestorage.app",
  messagingSenderId: "980060633629",
  appId: "1:980060633629:web:f761022289308b0f3324f4",
  measurementId: "G-WN3WQRZQGB",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
