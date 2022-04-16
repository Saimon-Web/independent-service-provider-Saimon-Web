// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCirp-57_YXGdRjnaxiv5Qb-lUTlna3Zz4",
    authDomain: "assignment-ten-627be.firebaseapp.com",
    projectId: "assignment-ten-627be",
    storageBucket: "assignment-ten-627be.appspot.com",
    messagingSenderId: "139100371841",
    appId: "1:139100371841:web:f597b31e27aaec3793c680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);