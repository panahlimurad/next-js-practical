// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyynPAHrk-BVcrd-3Vf4u16SaRhws9Z6E",
  authDomain: "next-js-test-8bd3b.firebaseapp.com",
  projectId: "next-js-test-8bd3b",
  storageBucket: "next-js-test-8bd3b.appspot.com",
  messagingSenderId: "442846874947",
  appId: "1:442846874947:web:e7264c5a165557a29873f6",
  measurementId: "G-F89SWVN6G5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth()

export {app,auth}

