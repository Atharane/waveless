// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Bkza9isKG0OX-2WEKQ0JRJ9O_2s8sIc",
  authDomain: "waveless-9ebd3.firebaseapp.com",
  projectId: "waveless-9ebd3",
  storageBucket: "waveless-9ebd3.appspot.com",
  messagingSenderId: "1055746111735",
  appId: "1:1055746111735:web:7a138a269324eed49b7bf2",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)