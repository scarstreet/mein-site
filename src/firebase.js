/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCvqQv4WiFBsD2Q00vnYQt7rmCGX0hsU2I',
  authDomain: 'scarsite-3d351.firebaseapp.com',
  projectId: 'scarsite-3d351',
  storageBucket: 'scarsite-3d351.appspot.com',
  messagingSenderId: '563077401735',
  appId: '1:563077401735:web:6602a6df49869914d87c22',
  measurementId: 'G-J0MTY0FBYP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export default db;
