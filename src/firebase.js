// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCq-IM7ymRZWD_cQDEarXeB2rH2rGkus0k",
  authDomain: "react-firebase-1211.firebaseapp.com",
  databaseURL: "https://react-firebase-1211-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-firebase-1211",
  storageBucket: "react-firebase-1211.appspot.com",
  messagingSenderId: "497921033555",
  appId: "1:497921033555:web:ed7f6f22ac466bc1e90da6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };
