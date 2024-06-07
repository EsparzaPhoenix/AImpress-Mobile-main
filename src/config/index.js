import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAaW7-rWywngSg_88m-SLcAn-xEo5nGd_M",
  
    authDomain: "sprintaimpress.firebaseapp.com",
  
    projectId: "sprintaimpress",
  
    storageBucket: "sprintaimpress.appspot.com",
  
    messagingSenderId: "746850090363",
  
    appId: "1:746850090363:web:03b296d1654702f28651de",
  
    measurementId: "G-WRF1B1TR5P"
  
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };