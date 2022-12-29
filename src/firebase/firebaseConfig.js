// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8aCuJtDZgCjiCQLq0LPYUpUtoCZnT4ZA",
  authDomain: "store-6-9.firebaseapp.com",
  projectId: "store-6-9",
  storageBucket: "store-6-9.appspot.com",
  messagingSenderId: "597690852874",
  appId: "1:597690852874:web:3fef6f7497ff1e6b9f61f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);