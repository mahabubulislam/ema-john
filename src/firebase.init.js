// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOOnTfZ3LzX7cmpFNuVcboHhKfBHjJ17s",
  authDomain: "ema-john-d35e3.firebaseapp.com",
  projectId: "ema-john-d35e3",
  storageBucket: "ema-john-d35e3.appspot.com",
  messagingSenderId: "1023394067097",
  appId: "1:1023394067097:web:a57540f02ae62861b47e08",
  measurementId: "G-C3Q9SB3RKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


export default auth