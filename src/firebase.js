import firebase from "./firebase";


const firebaseConfig = {

    apiKey: "AIzaSyDLMK3PwSgll3Nf40G7CX60LCRVeHweD68",
    authDomain: "whats-app-clone-2ee47.firebaseapp.com",
    projectId: "whats-app-clone-2ee47",
    storageBucket: "whats-app-clone-2ee47.appspot.com",
    messagingSenderId: "966672725761",
    appId: "1:966672725761:web:3fb13faaf7eaa251dbcd00",
    measurementId: "G-QEF1QD72WY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;