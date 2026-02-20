import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_z9jfuVrAFo-B5X86cyw1JXHijF72yQQ",
    authDomain: "difile.firebaseapp.com",
    projectId: "difile",
    storageBucket: "difile.firebasestorage.app",
    messagingSenderId: "70351908312",
    appId: "1:70351908312:web:525d2c4e4005783d8856ad",
    measurementId: "G-NB059XFVT6"
};

const app = initializeApp(firebaseConfig); 
export const fire = getAuth(app); 