import { browserLocalPersistence, setPersistence } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDu52Y9UalTjclhBRPZRPm4EUwb5ckpXCQ",
  authDomain: "fit-user-app.firebaseapp.com",
  projectId: "fit-user-app",
  storageBucket: "fit-user-app",
  messagingSenderId: "388449048733",
  appId: "1:388449048733:web:e5c3b6726ce592420a5c74",
  measurementId: "G-48KT9Y0VYF"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = getStorage(app);

export { db, auth, storage };