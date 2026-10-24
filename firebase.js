// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdN_IKU_lukM9v7l4kVnBqM3MX61PxEj0",
  authDomain: "careconnect-ec181.firebaseapp.com",
  projectId: "careconnect-ec181",
  storageBucket: "careconnect-ec181.firebasestorage.app",
  messagingSenderId: "392635781094",
  appId: "1:392635781094:web:8beba43dd7e13cf6679027",
  measurementId: "G-9C1J55SM0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);