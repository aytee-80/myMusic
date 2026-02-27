import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY as string,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN as string,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID as string,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET as string,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID as string,
    appId: process.env.EXPO_PUBLIC_APP_ID as string,
    measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID as string
};
console.log("API:", process.env.EXPO_PUBLIC_API_KEY);
console.log("");

const app = initializeApp(firebaseConfig); 
export const fire = getAuth(app); 
