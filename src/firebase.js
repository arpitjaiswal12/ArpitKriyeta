// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kriyeta-fdb3d.firebaseapp.com",
  projectId: "kriyeta-fdb3d",
  storageBucket: "kriyeta-fdb3d.appspot.com",
  messagingSenderId: "1046744552574",
  appId: "1:1046744552574:web:34de4177d85d566b24742f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);