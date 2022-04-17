import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgxq_kF2VIOCmXgYBhq4qfuJdgaTetUYU",
  authDomain: "fire-contact-8562e.firebaseapp.com",
  databaseURL:
    "https://fire-contact-8562e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-contact-8562e",
  storageBucket: "fire-contact-8562e.appspot.com",
  messagingSenderId: "22851408062",
  appId: "1:22851408062:web:3af215c63c470e16714eef",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;