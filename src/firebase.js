// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxnRxYvjQKTGLNTdTeJj3N_8zGOpxVvkI",
  authDomain: "portfolio-285b4.firebaseapp.com",
  projectId: "portfolio-285b4",
  storageBucket: "portfolio-285b4.appspot.com",
  messagingSenderId: "234677606931",
  appId: "1:234677606931:web:ddf5f05136f831d69c7de6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);