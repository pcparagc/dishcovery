import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4h_dqOoC8wrqjLIhglv2grxQNhXSMvbI",
  authDomain: "dishcovery-e061d.firebaseapp.com",
  projectId: "dishcovery-e061d",
  storageBucket: "dishcovery-e061d.appspot.com",
  messagingSenderId: "437607789203",
  appId: "1:437607789203:web:69530c5f38226d050ad366",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
