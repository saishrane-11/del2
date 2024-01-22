
// function registerHere() {
//   var fname = document.getElementById('fname').value;
//   var lname = document.getElementById('lname').value;
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   if(email == "" || password == ""){
//     alert('fill details properly');
//   }
//   firebase.database().ref("RegisterInfo/" + email).on("value", function (snap) {
//     var demo = snap.val();
//     var c=0;
//     console.log(demo);
//     if (!snap.exists()) {
//       c=1;

//       firebase.database().ref("del/" + email).set(
//         {
//           id: email,
//           passwd:password
//           products: {
//             c1: {
//               c1_p1: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c1_p2: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c1_p3: {
//                 noOfProducts: 0,
//                 prize: 0
//               }, c1_p4: {
//                 noOfProducts: 0,
//                 prize: 0
//               }
//             },
//             c2: {
//               c2_p1: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c2_p2: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c2_p3: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c2_p4: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//             },
//             c3: {
//               c3_p1: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c3_p2: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c3_p3: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//               c3_p4: {
//                 noOfProducts: 0,
//                 prize: 0
//               },
//             }
//           },
//           totalprize: 0
//         }
//       );

//       alert("Registered");
//     } else if(snap.exists() == true) {
//       console.log("val of c here");
//       console.log(c);
//      if(c==0){
//       alert("Already Registered");
//      }
//       console.log('exists');
//       console.log(snap.exists());
      

//     }else{
//       console.log('hohohoho');
//     }

//   }
//   );

// };

