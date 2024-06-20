// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKPGIttcF06hQTHJnaGSTLU2W3QdEs0D4",
  authDomain: "podcast-app-857db.firebaseapp.com",
  projectId: "podcast-app-857db",
  storageBucket: "podcast-app-857db.appspot.com",
  messagingSenderId: "194579007591",
  appId: "1:194579007591:web:2b72612a677f27f6936cc2",
  measurementId: "G-MP2YFR4SSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
