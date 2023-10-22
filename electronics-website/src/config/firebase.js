import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "shock-and-awe-store.firebaseapp.com",
  projectId: "shock-and-awe-store",
  storageBucket: "shock-and-awe-store.appspot.com",
  messagingSenderId: "962845629685",
  appId: "1:962845629685:web:b8774125482b3fcb42f9bc",
};

const app = initializeApp(firebaseConfig);
