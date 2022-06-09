// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA79nhJflOlBo3NKhHOkGlsVzzAY8z8vEo",
  authDomain: "mahmud-dev.firebaseapp.com",
  projectId: "mahmud-dev",
  storageBucket: "mahmud-dev.appspot.com",
  messagingSenderId: "637220003429",
  appId: "1:637220003429:web:155e04965634082f9af08c",
  measurementId: "G-0GVY3QTJ5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
