// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7aSz-EhdBQTdndVLNI7Gvp1GMEZdzVrA",
  authDomain: "voithy-task.firebaseapp.com",
  projectId: "voithy-task",
  storageBucket: "voithy-task.appspot.com",
  messagingSenderId: "467424356405",
  appId: "1:467424356405:web:a87bf95062f90352cea97c",
  measurementId: "G-CB48KTXPYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
