// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "flashcards-ai-ecc51.firebaseapp.com",
  projectId: "flashcards-ai-ecc51",
  storageBucket: "flashcards-ai-ecc51.appspot.com",
  messagingSenderId: "1081222809286",
  appId: "1:1081222809286:web:d2f98fabc1e575ce4d79c7",
  measurementId: "G-TTWB6BHQGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}