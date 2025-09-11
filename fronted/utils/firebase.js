// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "learning-management-26583.firebaseapp.com",
  projectId: "learning-management-26583",
  storageBucket: "learning-management-26583.firebasestorage.app",
  messagingSenderId: "43823099493",
  appId: "1:43823099493:web:debba31ab16a5bb193e08c",
  measurementId: "G-RYN5P2RJFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}