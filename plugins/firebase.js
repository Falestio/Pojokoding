import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD5aegWP5_8ADUEQWXONvU6O6ck-XRkDks",
    authDomain: "pojokoding.firebaseapp.com",
    projectId: "pojokoding",
    storageBucket: "pojokoding.appspot.com",
    messagingSenderId: "28459147285",
    appId: "1:28459147285:web:7b6b222f75d82022246e1c",
    measurementId: "G-TFJ6XZYGRY"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);