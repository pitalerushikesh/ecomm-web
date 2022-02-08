// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFsoy4cJ3pGi6Z2Y-PjzHI0KBVP2CZzTI",
  authDomain: "ecommerce-bbd82.firebaseapp.com",
  projectId: "ecommerce-bbd82",
  storageBucket: "ecommerce-bbd82.appspot.com",
  messagingSenderId: "918032435620",
  appId: "1:918032435620:web:dda7982050395ea50a1931",
  measurementId: "G-VN4Y0083PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
