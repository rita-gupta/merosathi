import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOIGzL5LMTv0eGjGpm2FlZdesfiuxHwqM",
  authDomain: "merosathi-4af22.firebaseapp.com",
  projectId: "merosathi-4af22",
  storageBucket: "merosathi-4af22.appspot.com",
  messagingSenderId: "596977969723",
  appId: "1:596977969723:web:f6ac6a87f78ea5c3f48a1e",
  measurementId: "G-68K7DGLQ39",
});

console.log(firebaseApp);

const db = firebaseApp.firestore();

export default db;
