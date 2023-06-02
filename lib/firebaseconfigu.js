// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpdl7nXjEDUgdEYiEuaTo6I77W6QA21dI",
  authDomain: "sixpl1.firebaseapp.com",
  projectId: "sixpl1",
  storageBucket: "sixpl1.appspot.com",
  messagingSenderId: "435132190491",
  appId: "1:435132190491:web:47cd621106363d2bbc4dbe",
  measurementId: "G-ERBD2W3V02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);