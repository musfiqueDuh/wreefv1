// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfTyK3lqBGw4W3Ki6lHaB3xWyUxN0VeesI",
  authDomain: "wreef-v1.firebaseapp.com",
  projectId: "wreef-v1",
  storageBucket: "wreef-v1.appspot.com",
  messagingSenderId: "365240717303",
  appId: "1:365240717303:web:8e734d69263ece62fc28f2",
  measurementId: "G-CET7F61466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app); // Optional: Only if you need analytics

export { db, analytics };
