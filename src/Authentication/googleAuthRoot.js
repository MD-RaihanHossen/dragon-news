// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwVe4m4Ck6OzIhtu_Ee-bVW4TG2nBfTYM",
  authDomain: "dragon-news-39d9b.firebaseapp.com",
  projectId: "dragon-news-39d9b",
  storageBucket: "dragon-news-39d9b.firebasestorage.app",
  messagingSenderId: "1058466761195",
  appId: "1:1058466761195:web:14d14f1ee980164683b1ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);