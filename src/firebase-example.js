
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "yourKey",
    authDomain: "yourDomein.firebaseapp.com",
    databaseURL: "https://yourDomein.firebaseio.com",
    projectId: "yourDomein",
    storageBucket: "yourDomein.appspot.com",
    messagingSenderId: "34543545"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}