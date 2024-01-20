// import firebase from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACpRiynUKa5QbhO69xW4XzPiamklNB-Mk",
  authDomain: "linkedin-clone1-dcf85.firebaseapp.com",
  projectId: "linkedin-clone1-dcf85",
  storageBucket: "linkedin-clone1-dcf85.appspot.com",
  messagingSenderId: "297931946162",
  appId: "1:297931946162:web:0d3f46e19e04b2458af1ab",
  measurementId: "G-GHNSE53HD4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export{ auth, provider, storage };
export default db;

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyACpRiynUKa5QbhO69xW4XzPiamklNB-Mk",
//     authDomain: "linkedin-clone1-dcf85.firebaseapp.com",
//     projectId: "linkedin-clone1-dcf85",
//     storageBucket: "linkedin-clone1-dcf85.appspot.com",
//     messagingSenderId: "297931946162",
//     appId: "1:297931946162:web:0d3f46e19e04b2458af1ab",
//     measurementId: "G-GHNSE53HD4"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, provider, storage, db };
