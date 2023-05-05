import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Ks0GVP7q4gDqbGTUxl5u2Vaugaybs9s",
  authDomain: "react-1358e.firebaseapp.com",
  projectId: "react-1358e",
  storageBucket: "react-1358e.appspot.com",
  messagingSenderId: "567213134539",
  appId: "1:567213134539:web:55745748170102225c414e",
  measurementId: "G-P6WTE4T1M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const productsCollectionRef = collection(db, "products");

export { db, productsCollectionRef };