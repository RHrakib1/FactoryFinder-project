// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvuA9Bfjya7KCrFKwlt94iaQReIDisX_s",
    authDomain: "factoryfinder-project.firebaseapp.com",
    projectId: "factoryfinder-project",
    storageBucket: "factoryfinder-project.appspot.com",
    messagingSenderId: "260024003667",
    appId: "1:260024003667:web:7d258079380e444addeaa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;




