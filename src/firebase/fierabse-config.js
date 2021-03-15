import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCI5d69En4L51K6fwGxjMpwdtE8KAbIMT8",
    authDomain: "experience-center-app.firebaseapp.com",
    projectId: "experience-center-app",
    storageBucket: "experience-center-app.appspot.com",
    messagingSenderId: "221551301728",
    appId: "1:221551301728:web:5c5bc3600413bec4119f05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}