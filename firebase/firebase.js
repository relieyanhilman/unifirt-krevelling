// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGbEV5UmSFbDdXvEexZQVLidK-CUeW7zQ",
  authDomain: "unifirt-krevelling.firebaseapp.com",
  projectId: "unifirt-krevelling",
  storageBucket: "unifirt-krevelling.appspot.com",
  messagingSenderId: "89823827379",
  appId: "1:89823827379:web:7a9a72bb0f619d5da3a7c6",
  measurementId: "G-LH6M15P6WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);