// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-9113d.firebaseapp.com",
  projectId: "mern-project-9113d",
  storageBucket: "mern-project-9113d.appspot.com",
  messagingSenderId: "86740030232",
  appId: "1:86740030232:web:4f7728972b0487e2e7446d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);