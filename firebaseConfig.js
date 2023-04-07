// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCASlfv4S4imqNqm9Lle0stD59jU0jFUCg",
  authDomain: "glaipdemo.firebaseapp.com",
  projectId: "glaipdemo",
  storageBucket: "glaipdemo.appspot.com",
  messagingSenderId: "749815281712",
  appId: "1:749815281712:web:fae81ddd2b0b7aef5395f5",
  measurementId: "G-YKRX0VN0VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };