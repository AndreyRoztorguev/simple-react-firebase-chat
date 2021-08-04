import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { createContext } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyClhaGVAbQ7hk1kQuP3vOyzHhazrywJAXQ",
  authDomain: "chat-react-20dbf.firebaseapp.com",
  projectId: "chat-react-20dbf",
  storageBucket: "chat-react-20dbf.appspot.com",
  messagingSenderId: "599587219930",
  appId: "1:599587219930:web:ed5790c8252d8aa27b38e3",
  measurementId: "G-ZWGPHT8PX3",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
