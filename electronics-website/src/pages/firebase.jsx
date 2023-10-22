import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
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
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
// export {app,auth};
export{auth,provider};
