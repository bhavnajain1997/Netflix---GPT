// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUc-9r_ALBakerUU7cZr9bIOTRAb7_D3k",
  authDomain: "netflixgpt-fa027.firebaseapp.com",
  projectId: "netflixgpt-fa027",
  storageBucket: "netflixgpt-fa027.appspot.com",
  messagingSenderId: "901691157739",
  appId: "1:901691157739:web:1ea0210403bdd02a6262ae",
  measurementId: "G-7MJV7HVGQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);