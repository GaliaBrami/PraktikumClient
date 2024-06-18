// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQs408J6jjBYd9brzGc0r83ih2Ecnegkw',
  authDomain: 'practicum-96675.firebaseapp.com',
  projectId: 'practicum-96675',
  storageBucket: 'practicum-96675.appspot.com',
  messagingSenderId: '730404459127',
  appId: '1:730404459127:web:fac4388f8dec64ee676c72',
  measurementId: 'G-G63BVTV2H8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Optionally, export app and analytics if you need to use them elsewhere in your project
export { app, analytics };
