// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWSBx7udvDjhFx2yp6nPFyhS9PrUvaA90",
    // apikey: process.env.FIREBASE_API_KEY,
    authDomain: "fashionflair-5aa48.firebaseapp.com",
    projectId: "fashionflair-5aa48",
    storageBucket: "fashionflair-5aa48.appspot.com",
    messagingSenderId: "324069435579",
    appId: "1:324069435579:web:33c9e6636072751196a19e",
    measurementId: "G-157XNTTJ9M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);