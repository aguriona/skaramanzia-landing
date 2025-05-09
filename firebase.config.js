// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzYvl0FOHY_66PP42NNZoesxAhRbwr_NM",
  authDomain: "morpheus-5e8d5.firebaseapp.com",
  projectId: "morpheus-5e8d5",
  storageBucket: "morpheus-5e8d5.firebasestorage.app",
  messagingSenderId: "510024379775",
  appId: "1:510024379775:web:0d90812f1137bbc366be4a",
  measurementId: "G-8KNK3XC1MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);