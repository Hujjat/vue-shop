import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjDW8R09AFH9VifDGTZ5WSTURZnbaHURU",
    authDomain: "vue-shop-5a95e.firebaseapp.com",
    databaseURL: "https://vue-shop-5a95e.firebaseio.com",
    projectId: "vue-shop-5a95e",
    storageBucket: "vue-shop-5a95e.appspot.com",
    messagingSenderId: "892402191551"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}