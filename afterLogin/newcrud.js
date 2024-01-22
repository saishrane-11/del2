
function afterRegistration(val){
//   var val=localStorage.getItem("inputValue");
//   console.log('valnew: '+val);
  console.log('in afterregistration');
//   console.log(phoneV)
  firebase.database().ref("student/" + val).set(
    {
      id: phoneV,
      products:{
        c1:{
          c1_p1: {
            noOfProducts: 0,
            prize: 0
          },
          c1_p2: {
            noOfProducts:0,
            prize: 0
          },
          c1_p3: {
            noOfProducts:0,
            prize: 0
          }, c1_p4: {
            noOfProducts:0,
            prize: 0
          }
        },
        c2:{
          c2_p1: {
            noOfProducts: 0,
            prize: 0
          },
          c2_p2: {
            noOfProducts: 0,
            prize: 0
          },
          c2_p3: {
            noOfProducts: 0,
            prize: 0
          },
          c2_p4: {
            noOfProducts: 0,
            prize: 0
          },
        },
        c3:{
          c3_p1: {
            noOfProducts: 0,
            prize: 0
          },
          c3_p2: {
            noOfProducts: 0,
            prize: 0
          },
          c3_p3: {
            noOfProducts: 0,
            prize: 0
          },
          c3_p4: {
            noOfProducts: 0,
            prize: 0
          },
        }
      },
     totalprize: 0,
    }
  );
  alert('done dona done done')
}