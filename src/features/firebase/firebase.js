import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDygr3M1nQOM6nV4-tzoxrcsbgNefNgWSo",
  authDomain: "gooclone-47a5f.firebaseapp.com",
  projectId: "gooclone-47a5f",
  storageBucket: "gooclone-47a5f.appspot.com",
  messagingSenderId: "91852448501",
  appId: "1:91852448501:web:4bd8e1987398d42077dbbc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
const Timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, provider,Timestamp };  