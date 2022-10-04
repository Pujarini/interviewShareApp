import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpWlEIaK1eth0hlPzCZtthlhUgBHSx4oU",
  authDomain: "interview-share-app.firebaseapp.com",
  projectId: "interview-share-app",
  storageBucket: "interview-share-app.appspot.com",
  messagingSenderId: "804067330000",
  appId: "1:804067330000:web:424a84fa05a38e6cb81bd5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
