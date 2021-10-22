// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv_izhE9oWcdFQ4qjo9u9uXaXepyIJGC8",
  authDomain: "instagram-4bfb7.firebaseapp.com",
  projectId: "instagram-4bfb7",
  storageBucket: "instagram-4bfb7.appspot.com",
  messagingSenderId: "1088998849319",
  appId: "1:1088998849319:web:7cc26389f0dc3a6a428702"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, app, storage }