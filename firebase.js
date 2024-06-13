// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-IM7ymRZWD_cQDEarXeB2rH2rGkus0k",
  authDomain: "react-firebase-1211.firebaseapp.com",
  projectId: "react-firebase-1211",
  storageBucket: "react-firebase-1211.appspot.com",
  messagingSenderId: "497921033555",
  appId: "1:497921033555:web:ed7f6f22ac466bc1e90da6",
  measurementId: "G-JQXTS5Z07T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);