import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyD5aegWP5_8ADUEQWXONvU6O6ck-XRkDks",
    authDomain: "pojokoding.firebaseapp.com",
    projectId: "pojokoding",
    storageBucket: "pojokoding.appspot.com",
    messagingSenderId: "28459147285",
    appId: "1:28459147285:web:7b6b222f75d82022246e1c",
    measurementId: "G-TFJ6XZYGRY"
};
firebase.initializeApp(config);

const db = firebase.firestore();

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
};
db.settings(settings);
const auth = firebase.auth()


export {
    db,
    auth
};