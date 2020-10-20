// var braintree = require("braintree");

// var gateway = braintree.connect({
//     environment:  braintree.Environment.Sandbox,
//     merchantId:   'gtgpfkj2fg6bpxkz',
//     publicKey:    'bxymrk5fp3dp9gs4',
//     privateKey:   '2117978b92bf087b39eaa74981fbd345'
// });

// exports.getToken = (req, res) => {
//     gateway.clientToken.generate({}, function (err, response) {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(response);
//         }
//       });
// };

// exports.processPayment = (req, res) => {
//     let nonceFromTheClient = req.body.paymentMethodNonce

//     let amountFromTheClient = req.body.amount
//     gateway.transaction.sale({
//         amount: amountFromTheClient,
//         paymentMethodNonce: nonceFromTheClient,
        
//         options: {
//           submitForSettlement: true
//         }
//       }, function (err, result) {
//           if (err) {
//               res.status(500).json(error)
//           } else {
//               res.json(result);
//           }
//       });
// }