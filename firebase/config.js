import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    apiKey: "AIzaSyADvlD3XE5fBjHv7dZR5eqFWFDLhflIw7o",
    authDomain: "teamrocket-b4177.firebaseapp.com",
    projectId: "teamrocket-b4177",
    storageBucket: "teamrocket-b4177.appspot.com",
    messagingSenderId: "861496381955",
    appId: "1:861496381955:web:5d6abebad75e5832fbb436"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
