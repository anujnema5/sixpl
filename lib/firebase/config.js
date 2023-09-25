// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
    apiKey: "AIzaSyDLcp7xXmSzLCoG2JVLoOo31kH3zlB2Sv4",
    authDomain: "sixpl-dashboard.firebaseapp.com",
    projectId: "sixpl-dashboard",
    storageBucket: "sixpl-dashboard.appspot.com",
    messagingSenderId: "241124783662",
    appId: "1:241124783662:web:b883ef1d44de05e8c111bf",
    measurementId: "G-DZJTZHH4SG",
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

export default app;