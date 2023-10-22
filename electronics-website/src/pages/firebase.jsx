import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKRLzf31mp1UxjZ-uZnTRcciKu7QwomDA",
  authDomain: "electronics-store-1bc32.firebaseapp.com",
  projectId: "electronics-store-1bc32",
  storageBucket: "electronics-store-1bc32.appspot.com",
  messagingSenderId: "736623939310",
  appId: "1:736623939310:web:e25dd84ba59167ee47edff",
  measurementId: "G-N45CD21WCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
