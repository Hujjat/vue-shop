const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {

 response.send("Hello from Firebase!");
 
});


exports.Hello = functions.https.onRequest((request, response) => {

    if(request.method == 'POST'){
        response.send("Hello: "+ request.query.lastName);
    }else{
        response.send("Please send post request");
    }
    
});
   
   