// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutQItCXraEKSR1U0xixIFfK1nKioCSnU",
  authDomain: "userdata-a5a46.firebaseapp.com",
  databaseURL: "https://userdata-a5a46-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "userdata-a5a46",
  storageBucket: "userdata-a5a46.appspot.com",
  messagingSenderId: "768376619207",
  appId: "1:768376619207:web:1acdd01091a11f136d7ee2",
  measurementId: "G-E5KK3311HB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
