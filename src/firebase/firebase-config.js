import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyAU_3uH6KGex85X82iGpPAYymP-foQV3Kg",
    authDomain: "react-apps-curso-a80b4.firebaseapp.com",
    projectId: "react-apps-curso-a80b4",
    storageBucket: "react-apps-curso-a80b4.appspot.com",
    messagingSenderId: "1002697686158",
    appId: "1:1002697686158:web:2bb5891232284c8bc91ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



  export {
      db, googleAuthProvider, firebase
  }