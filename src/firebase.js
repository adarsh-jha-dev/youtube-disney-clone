import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjPxeVK1CSjfsklvCyQeDNEYBMzdQOgAA",
  authDomain: "disneyplus-clone-dff30.firebaseapp.com",
  projectId: "disneyplus-clone-dff30",
  storageBucket: "disneyplus-clone-dff30.appspot.com",
  messagingSenderId: "618098119785",
  appId: "1:618098119785:web:e4bc88f8d03fd761723ef8",
  measurementId: "G-GL6VQS307M",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export {
  auth,
  provider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  storage,
  storageRef,
  uploadBytes,
  getDownloadURL,
};
export default db;
