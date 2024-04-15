import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCPXW6pzrtM73btlWl5bpiPBhVf5-i_c3s",
    authDomain: "notes-app-b4797.firebaseapp.com",
    projectId: "notes-app-b4797",
    storageBucket: "notes-app-b4797.appspot.com",
    messagingSenderId: "786618176400",
    appId: "1:786618176400:web:2b9dc3ed7ff4df34049915"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
