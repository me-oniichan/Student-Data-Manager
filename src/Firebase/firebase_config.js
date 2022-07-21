// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey : process.env.apiKey,
  authDomain : process.env.authDomain,
  databaseURL : process.env.databaseURL,
  projectId : process.env.projectId,
  storageBucket : process.env.storageBucket,
  messagingSenderId : process.env.messagingSenderId,
  appId : process.env.appId,
  measurementId : process.env.measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

