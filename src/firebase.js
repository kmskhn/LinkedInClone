import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaRYP9210qPRH5_pbNYIUajFM80MPNL60",
  authDomain: "linkedin-clone-12568.firebaseapp.com",
  projectId: "linkedin-clone-12568",
  storageBucket: "linkedin-clone-12568.appspot.com",
  messagingSenderId: "31208274709",
  appId: "1:31208274709:web:103915d71215d36dbf071c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
