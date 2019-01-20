  
  import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjDW8R09AFH9VifDGTZ5WSTURZnbaHURU",
    authDomain: "vue-shop-5a95e.firebaseapp.com",
    databaseURL: "https://vue-shop-5a95e.firebaseio.com",
    projectId: "vue-shop-5a95e",
    storageBucket: "vue-shop-5a95e.appspot.com",
    messagingSenderId: "892402191551"
  };
  
  export const fb = firebase.initializeApp(config);
