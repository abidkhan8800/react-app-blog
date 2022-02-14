// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FB,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FB,
  projectId: process.env.REACT_APP_PROJECT_ID_FB,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FB,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_FB,
  appId: process.env.REACT_APP_APP_ID_FB
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;