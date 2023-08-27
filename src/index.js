import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyCbyl9j-WhyRmxof7_XrFpZJ8MGjvel1Iw",
  authDomain: "inventory-management-app-cca30.firebaseapp.com",
  projectId: "inventory-management-app-cca30",
  storageBucket: "inventory-management-app-cca30.appspot.com",
  messagingSenderId: "152970274874",
  appId: "1:152970274874:web:6378268a4cb561d32c6d03",
  measurementId: "G-LK123K505G"
};

function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

signInWithEmailAndPassword('user@example.com', 'password123')
  .then((userCredential) => {
    // User signed in successfully
    const user = userCredential.user;
    console.log('Authenticated user:', user);
  })
  .catch((error) => {
    // Error occurred during authentication
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Authentication error:', errorCode, errorMessage);
  });

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
