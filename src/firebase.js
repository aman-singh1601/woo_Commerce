// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBpkK0wfKLQ03LOgEfp0c49tQ-HsdLSRQo",
  authDomain: "woo-commerce-941c8.firebaseapp.com",
  projectId: "woo-commerce-941c8",
  storageBucket: "woo-commerce-941c8.appspot.com",
  messagingSenderId: "152483209772",
  appId: "1:152483209772:web:5a38a2a870eba82958a789"
});


const auth=firebase.auth();

export {auth}