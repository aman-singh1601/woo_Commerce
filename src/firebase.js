// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBI9jl-zrXT-yej3b1cM-RoT-tzESggnqs",
  authDomain: "woo-commerce-bd194.firebaseapp.com",
  projectId: "woo-commerce-bd194",
  storageBucket: "woo-commerce-bd194.appspot.com",
  messagingSenderId: "220304581261",
  appId: "1:220304581261:web:8d66c136a20620269bf8c4"
});


const auth=firebase.auth();

export {auth}