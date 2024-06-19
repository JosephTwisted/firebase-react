import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

// Import Firebase services
import { database, auth } from './firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-IM7ymRZWD_cQDEarXeB2rH2rGkus0k",
  authDomain: "react-firebase-1211.firebaseapp.com",
  databaseURL: "https://react-firebase-1211-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-firebase-1211",
  storageBucket: "react-firebase-1211.appspot.com",
  messagingSenderId: "497921033555",
  appId: "1:497921033555:web:ed7f6f22ac466bc1e90da6"
};


// Export initialized services
export { database, auth };

// Render React application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);