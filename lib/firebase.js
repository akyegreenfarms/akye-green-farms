import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0IlTlBlde5p5uxXHyt6vfoAbNo9GszsM",
  authDomain: "akye-green-farms.firebaseapp.com",
  projectId: "akye-green-farms",
  storageBucket: "akye-green-farmsakye-green-farms.firebasestorage.app",
  messagingSenderId: "1042420689261",
  appId: "1:1042420689261:web:c1c2293d33920dd1af9264"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
