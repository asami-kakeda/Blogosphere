import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQLSZSIDazv7lmbNVxEBvq2aaC-8YGqYo",
  authDomain: "blog-e8f2d.firebaseapp.com",
  projectId: "blog-e8f2d",
  storageBucket: "blog-e8f2d.appspot.com",
  messagingSenderId: "33364645079",
  appId: "1:33364645079:web:24f695788fe87ab491cc92",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
