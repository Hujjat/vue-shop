const functions = require('firebase-functions');
const stripe = require("stripe")("sk_test_lOinZI9YYmU0R1M1izdHwk4000uXCMz6sG");
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');

admin.initializeApp();


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.CheckoutSession = functions.https.onRequest((request, response) => {

    cors(request, response, async () => {

      let myProducts = request.query.products;

      myProducts = Object.entries(JSON.parse(myProducts));
      
     
      // response.send(myProducts);
      {id:2}
      const productsArray = [];
      myProducts.forEach(item => {

        const p =  admin.firestore().doc(`products/${item[0]}`).get();
        productsArray.push(p);
        
      });

      const all = await Promise.all(productsArray);

      const results = [];

      all.forEach(item => {
        const data = {};
        data.amount = parseFloat(item.data().price * 100);
        data.currency = "aud";
        data.description = item.data().description ;
        data.name = item.data().name;

        myProducts.forEach(q => {
          
            if(item.id == q[0]){
              data.quantity = q[1];
            }
          
        });

        results.push(data)
    });


      // console.log(productsArray);


    //   let productsArray = [
    //     {
    //       name: "Shoe",
    //       description: "Comfortable cotton Shoe",
    //       amount: 1000,
    //       currency: "aud",
    //       quantity: 1
    //     },
    //     {
    //       name: "T-shirt",
    //       description: "Comfortable cotton t-shirt",
    //       amount: 1500,
    //       currency: "aud",
    //       quantity: 2
    //     }
    // ];



        stripe.checkout.sessions.create({
            success_url: "https://example.com/success",
            cancel_url: "https://example.com/cancel",
            payment_method_types: ["card"],
            line_items: results
          }, function(err, session) {
              
                response.send(session);
          });
    
        
      });
 
 

 
});

