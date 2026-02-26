import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxITcvxGTgRSfioAjD1gF_sWrTLcQqK54",
  authDomain: "sunat-5a538.firebaseapp.com",
  projectId: "sunat-5a538",
  storageBucket: "sunat-5a538.firebasestorage.app",
  messagingSenderId: "1084746670404",
  appId: "1:1084746670404:web:f6164e29a08cc96327b711",
  measurementId: "G-RX3JFPD54T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);