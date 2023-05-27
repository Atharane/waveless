// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTzrHlw6CzDCmHyvM_8he-ksIYO8YCgvA",
  authDomain: "waveless-148f1.firebaseapp.com",
  projectId: "waveless-148f1",
  storageBucket: "waveless-148f1.appspot.com",
  messagingSenderId: "764665856520",
  appId: "1:764665856520:web:e1bd11cf74557fdf87c7bd",
  measurementId: "G-D6963YCPN0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
const analytics = getAnalytics(app)
