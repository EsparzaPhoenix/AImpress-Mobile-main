import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAxjdY-RodKUZjE708h9vWMgGdJxn7uei8",

  authDomain: "reciclaki-gs.firebaseapp.com",

  projectId: "reciclaki-gs",

  storageBucket: "reciclaki-gs.appspot.com",

  messagingSenderId: "200454517069",

  appId: "1:200454517069:web:1dbf4c9f797766ad04c704",

  measurementId: "G-EQ6Z3ZR53P"
  
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };