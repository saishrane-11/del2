  
function increaseCount(a, b, c) { 
  console.log("hey c here" + c)
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  if (c == 'c1_p1') {
    c1_p1()
  }
  if (c == "c1_p2") {
    c1_p2()
  }
  if (c == "c1_p3") {
    c1_p3()
  }
  if (c == "c1_p4") {
    c1_p4()
  }
  /////////////////////////////////
  if (c == 'c2_p1') {
    c2_p1()
  }
  if (c == "c2_p2") {
    c2_p2()
  }
  if (c == "c2_p3") {
    c2_p3()
  }
  if (c == "c2_p4") {
    c2_p4()
  }
  ////////////////////////////////
  if (c == 'c3_p1') {
    c3_p1()
  }
  if (c == "c3_p2") {
    c3_p2()
  }
  if (c == "c3_p3") {
    c3_p3()
  }
  if (c == "c3_p4") {
    c3_p4()
  }

}
function decreaseCount(a, b, c) {

  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;

  }
  if (c == 'c1_p1') {
    c1_p1()
  }
  if (c == "c1_p2") {
    c1_p2()
  }
  if (c == "c1_p3") {
    c1_p3()
  }
  if (c == "c1_p4") {
    c1_p4()
  }
  /////////////////////////////////
  if (c == 'c2_p1') {
    c2_p1()
  }
  if (c == "c2_p2") {
    c2_p2()
  }
  if (c == "c2_p3") {
    c2_p3()
  }
  if (c == "c2_p4") {
    c2_p4()
  }
  ////////////////////////////////
  if (c == 'c3_p1') {
    c3_p1()
  }
  if (c == "c3_p2") {
    c3_p2()
  }
  if (c == "c3_p3") {
    c3_p3()
  }
  if (c == "c3_p4") {
    c3_p4()
  }
}

////////////////////////////////ALL C1 FUNCTIONS /////////////////////////////////
function c1_p1() {
  var val1 = document.getElementById('prize-of-product-c1p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c1p1').innerHTML = totalPrizeOfProduct1;

}
function c1_p2() {
  var val2 = document.getElementById('prize-of-product-c1p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c1p2').innerHTML = totalPrizeOfProduct2;
}
function c1_p3() {
  var val3 = document.getElementById('prize-of-product-c1p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c1p3').innerHTML = totalPrizeOfProduct3;
}
function c1_p4() {
  var val4 = document.getElementById('prize-of-product-c1p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c1p4').innerHTML = totalPrizeOfProduct4;
}

////////////////////////////////ALL C2 FUNCTIONS /////////////////////////////////

function c2_p1() {
  var val1 = document.getElementById('prize-of-product-c2p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c2p1').innerHTML = totalPrizeOfProduct1;
}
function c2_p2() {
  var val2 = document.getElementById('prize-of-product-c2p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c2p2').innerHTML = totalPrizeOfProduct2;
}
function c2_p3() {
  var val3 = document.getElementById('prize-of-product-c2p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c2p3').innerHTML = totalPrizeOfProduct3;
}
function c2_p4() {
  var val4 = document.getElementById('prize-of-product-c2p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c2p4').innerHTML = totalPrizeOfProduct4;
}


////////////////////////////////ALL C3 FUNCTIONS /////////////////////////////////

function c3_p1() {
  var val1 = document.getElementById('prize-of-product-c3p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c3p1').innerHTML = totalPrizeOfProduct1;
}
function c3_p2() {
  var val2 = document.getElementById('prize-of-product-c3p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c3p2').innerHTML = totalPrizeOfProduct2;
}
function c3_p3() {
  var val3 = document.getElementById('prize-of-product-c3p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c3p3').innerHTML = totalPrizeOfProduct3;
}
function c3_p4() {
  var val4 = document.getElementById('prize-of-product-c3p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c3p4').innerHTML = totalPrizeOfProduct4;
}


setStartVal()
function setStartVal(){ 
  new_c1_p1_count = 0, new_c1_p2_count = 0, new_c1_p3_count = 0, new_c1_p4_count = 0;
  new_c2_p1_count = 0, new_c2_p2_count = 0, new_c2_p3_count = 0, new_c2_p4_count = 0;
  new_c3_p1_count = 0, new_c3_p2_count = 0, new_c3_p3_count = 0, new_c3_p4_count = 0;
}





































// ADD TO CART FUNCTION

function addtocart(product) {
  if (product == 'c1_p1') {
    var nop=document.getElementById('prize-of-product-c1p1').value;
    console.log('in c1p1')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c1/'
    firebase.database().ref(demo+'c1_p1').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c1_p1_base_prize
        }        
    );
    // alert('updating');
    // console.log('hey hello ');
  } else if (product == 'c1_p2') {
    var nop=document.getElementById('prize-of-product-c1p2').value;
    console.log('in c1p2')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c1/'
    firebase.database().ref(demo+'c1_p2').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c1_p2_base_prize
        }        
    );
  } else if (product == 'c1_p3') {
    var nop=document.getElementById('prize-of-product-c1p3').value;
    console.log('in c1p3')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c1/'
    firebase.database().ref(demo+'c1_p3').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c1_p3_base_prize
        }        
    );

  } else if (product == 'c1_p4') {
    var nop=document.getElementById('prize-of-product-c1p4').value;
    console.log('in c1p4')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c1/'
    firebase.database().ref(demo+'c1_p4').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c1_p4_base_prize
        }        
    );
  }
  else if (product == 'c2_p1') {
    var nop=document.getElementById('prize-of-product-c2p1').value;
    console.log('in c2p1')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c2/'
    firebase.database().ref(demo+'c2_p1').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c2_p1_base_prize
        }        
    );
  } else if (product == 'c2_p2') {
    var nop=document.getElementById('prize-of-product-c2p2').value;
    console.log('in c2p2')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c2/'
    firebase.database().ref(demo+'c2_p2').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c2_p2_base_prize
        }        
    );
  } else if (product == 'c2_p3') {
    var nop=document.getElementById('prize-of-product-c2p3').value;
    console.log('in c2p3')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c2/'
    firebase.database().ref(demo+'c2_p3').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c2_p3_base_prize
        }        
    );
  } else if (product == 'c2_p4') {
    var nop=document.getElementById('prize-of-product-c2p4').value;
    console.log('in c2p4')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c2/'
    firebase.database().ref(demo+'c2_p4').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c2_p4_base_prize
        }        
    );
  }
  else if (product == 'c3_p1') {
    var nop=document.getElementById('prize-of-product-c3p1').value;
    console.log('in c3p1')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c3/'
    firebase.database().ref(demo+'c3_p1').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c3_p1_base_prize
        }        
    );
  } else if (product == 'c3_p2') {
    var nop=document.getElementById('prize-of-product-c3p2').value;
    console.log('in c3p2')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c3/'
    firebase.database().ref(demo+'c3_p2').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c3_p2_base_prize
        }        
    );
  } else if (product == 'c3_p3') {
    var nop=document.getElementById('prize-of-product-c3p3').value;
    console.log('in c3p3')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c3/'
    firebase.database().ref(demo+'c3_p3').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c3_p3_base_prize
        }        
    );
  } else if (product == 'c3_p4') {
    var nop=document.getElementById('prize-of-product-c3p4').value;
    console.log('in c3p4')
    console.log(uniqueId)
    var demo='student/'+uniqueId+'/products/c3/'
    firebase.database().ref(demo+'c3_p4').update(
        {
          
            // rollNo: rollV,
            noOfProducts:nop,
            prize: nop * c3_p4_base_prize
        }        
    );
  }
  updatePrize();
  alert('Added To cart');
  
}

/////////////////////////////BASE PRIZE OF PRODUCTS///////////////////////////
const c1_p1_base_prize = 150;
const c1_p2_base_prize = 250;
const c1_p3_base_prize = 200;
const c1_p4_base_prize = 100;

const c2_p1_base_prize = 150;
const c2_p2_base_prize = 250;
const c2_p3_base_prize = 200;
const c2_p4_base_prize = 100;

const c3_p1_base_prize = 150;
const c3_p2_base_prize = 250;
const c3_p3_base_prize = 200;
const c3_p4_base_prize = 100;
////////////////////////////////////////////////////////////////////////////////

var val=localStorage.getItem("inputValue");
var uniqueId = val;


function updatePrize(){

  firebase.database().ref("student/" + uniqueId).on("value", function(snap){
    var demo = snap.val(); 
    var finalPrize=demo.products.c1.c1_p1.prize + demo.products.c1.c1_p2.prize + demo.products.c1.c1_p3.prize + demo.products.c1.c1_p4.prize + demo.products.c2.c2_p1.prize + demo.products.c2.c2_p2.prize +demo.products.c2.c2_p3.prize + demo.products.c2.c2_p4.prize + demo.products.c3.c3_p1.prize + demo.products.c3.c3_p2.prize + demo.products.c3.c3_p3.prize + demo.products.c3.c3_p4.prize;
    console.log('finalprize: '+finalPrize);
    console.log(demo.products.c1.c1_p1.prize + demo.products.c1.c1_p2.prize + demo.products.c1.c1_p3.prize + demo.products.c1.c1_p4.prize + demo.products.c2.c2_p1.prize + demo.products.c2.c2_p2.prize +demo.products.c2.c2_p3.prize + demo.products.c2.c2_p4.prize + demo.products.c3.c3_p1.prize + demo.products.c3.c3_p2.prize + demo.products.c3.c3_p3.prize + demo.products.c3.c3_p4.prize)

    // document.getElementById('prize-of-cart').innerHTML=100;
    
    newUpdatedPrize(finalPrize);

    

  document.getElementById('prize-of-cart').innerText=demo.totalprize;
    
  }
  );
}
function newUpdatedPrize(finalPrize){
  console.log('new')
  firebase.database().ref('student/'+uniqueId).update(
    {
        // rollNo: rollV,
        totalprize: finalPrize
    }
);
}
window.onload = function() {
  updatePrize();
};


  //   function afterRegistration(){
  // console.log('in afterregistration');
  // console.log(phoneV)
  // firebase.database().ref("student/" + phoneV).set(
  //   {
  //     id: phoneV,
  //     products:{
  //       c1:{
  //         c1_p1: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c1_p2: {
  //           noOfProducts:0,
  //           prize: 0
  //         },
  //         c1_p3: {
  //           noOfProducts:0,
  //           prize: 0
  //         }, c1_p4: {
  //           noOfProducts:0,
  //           prize: 0
  //         }
  //       },
  //       c2:{
  //         c2_p1: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c2_p2: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c2_p3: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c2_p4: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //       },
  //       c3:{
  //         c3_p1: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c3_p2: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c3_p3: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //         c3_p4: {
  //           noOfProducts: 0,
  //           prize: 0
  //         },
  //       }
  //     },
  //    totalprize: 0,
  //   }
  // );
// }


  
















// function updateDatabase(new_c1_p1_count, new_c1_p2_count, new_c1_p3_count, new_c1_p4_count, new_c2_p1_count, new_c2_p2_count, new_c2_p3_count, new_c2_p4_count, new_c3_p1_count, new_c3_p2_count, new_c3_p3_count, new_c3_p4_count) {
//   console.log("in update database")

  // firebase.database().ref("student/" + uniqueId).set(
  //   {
  //     id: uniqueId,
  //     products:{
  //       c1:{
  //         c1_p1: {
  //           noOfProducts: new_c1_p1_count,
  //           prize: new_c1_p1_count * c1_p1_base_prize
  //         },
  //         c1_p2: {
  //           noOfProducts: new_c1_p2_count,
  //           prize: new_c1_p2_count * c1_p2_base_prize
  //         },
  //         c1_p3: {
  //           noOfProducts: new_c1_p3_count,
  //           prize: new_c1_p3_count * c1_p3_base_prize
  //         }, c1_p4: {
  //           noOfProducts: new_c1_p4_count,
  //           prize: new_c1_p4_count * c1_p4_base_prize
  //         }
  //       },
  //       c2:{
  //         c2_p1: {
  //           noOfProducts: new_c2_p1_count,
  //           prize: new_c2_p1_count * c2_p1_base_prize
  //         },
  //         c2_p2: {
  //           noOfProducts: new_c2_p2_count,
  //           prize: new_c2_p2_count * c2_p2_base_prize
  //         },
  //         c2_p3: {
  //           noOfProducts: new_c2_p3_count,
  //           prize: new_c2_p3_count * c2_p3_base_prize
  //         },
  //         c2_p4: {
  //           noOfProducts: new_c2_p4_count,
  //           prize: new_c2_p4_count * c2_p4_base_prize
  //         },
  //       },
  //       c3:{
  //         c3_p1: {
  //           noOfProducts: new_c3_p1_count,
  //           prize: new_c3_p1_count * c3_p1_base_prize
  //         },
  //         c3_p2: {
  //           noOfProducts: new_c3_p2_count,
  //           prize: new_c3_p2_count * c3_p2_base_prize
  //         },
  //         c3_p3: {
  //           noOfProducts: new_c3_p3_count,
  //           prize: new_c3_p3_count * c3_p3_base_prize
  //         },
  //         c3_p4: {
  //           noOfProducts: new_c3_p4_count,
  //           prize: new_c3_p4_count * c3_p4_base_prize
  //         },
  //       }
  //     },
  //    totalprize: (new_c1_p1_count * c1_p1_base_prize) + (new_c1_p2_count * c1_p2_base_prize) + (new_c1_p3_count * c1_p3_base_prize) + (new_c1_p4_count * c1_p4_base_prize) + (new_c2_p1_count * c2_p1_base_prize) + (new_c2_p2_count * c2_p2_base_prize) + (new_c2_p3_count * c2_p3_base_prize) + (new_c2_p4_count * c2_p4_base_prize) + (new_c3_p1_count * c3_p1_base_prize) + (new_c3_p2_count * c3_p2_base_prize) + (new_c3_p3_count * c3_p3_base_prize) + (new_c3_p4_count * c3_p4_base_prize)    }
  // );
  // alert("Data inserted 2");
  // cartData()
// }


// cartData()

// function cartData(){

//   firebase.database().ref("student/" + uniqueId).on("value", function(snap){
//     var demo = snap.val(); 
//     console.log('this is '+demo.totalprize);
//     document.getElementById('prize-of-cart').innerText=demo.totalprize;
//     // document.getElementById('prize-of-cart').style.color=blur;
// }
// );

  
// }


document.getElementById('clickMe').onclick = function() {
  
  // window.location.href='cart.html';
  console.log('in')
  firebase.database().ref("student/" + uniqueId).on("value", function(snap){
    var demo = snap.val(); 
    console.log(demo)
    // c1
    if(demo.products.c1.c1_p1.prize != 0){
        createElementOfCart(base_productName_c1p1,base_productImage_c1p1,demo.products.c1.c1_p1.noOfProducts,demo.products.c1.c1_p1.prize);
    }
    if(demo.products.c1.c1_p2.prize != 0){
        createElementOfCart(base_productName_c1p2, base_productImage_c1p2,demo.products.c1.c1_p2.noOfProducts,demo.products.c1.c1_p2.prize);
    }
    if(demo.products.c1.c1_p3.prize != 0){
        createElementOfCart(base_productName_c1p3, base_productImage_c1p3,demo.products.c1.c1_p3.noOfProducts,demo.products.c1.c1_p3.prize);
    }
    if(demo.products.c1.c1_p4.prize != 0){
        createElementOfCart(base_productName_c1p4, base_productImage_c1p4,demo.products.c1.c1_p4.noOfProducts,demo.products.c1.c1_p4.prize);
    }
    // c2
    if(demo.products.c2.c2_p1.prize != 0){
        createElementOfCart(base_productName_c2p1, base_productImage_c2p1,demo.products.c2.c2_p1.noOfProducts,demo.products.c2.c2_p1.prize);
    }
    if(demo.products.c2.c2_p2.prize != 0){
        createElementOfCart(base_productName_c2p2, base_productImage_c2p2,demo.products.c2.c2_p2.noOfProducts,demo.products.c2.c2_p2.prize);
    }
    if(demo.products.c2.c2_p3.prize != 0){
        createElementOfCart(base_productName_c2p3, base_productImage_c2p3,demo.products.c2.c2_p3.noOfProducts,demo.products.c2.c2_p3.prize);
    }
    if(demo.products.c2.c2_p4.prize != 0){
        createElementOfCart(base_productName_c2p4, base_productImage_c2p4,demo.products.c2.c2_p4.noOfProducts,demo.products.c2.c2_p4.prize);
    }
    // c3
    if(demo.products.c3.c3_p1.prize != 0){
        createElementOfCart(base_productName_c3p1, base_productImage_c3p1,demo.products.c3.c3_p1.noOfProducts,demo.products.c3.c3_p1.prize);
    }
    if(demo.products.c3.c3_p2.prize != 0){
        createElementOfCart(base_productName_c3p2, base_productImage_c3p2,demo.products.c3.c3_p2.noOfProducts,demo.products.c3.c3_p2.prize);
    }
    if(demo.products.c3.c3_p3.prize != 0){
        createElementOfCart(base_productName_c3p3, base_productImage_c3p3,demo.products.c3.c3_p3.noOfProducts,demo.products.c3.c3_p3.prize);
    }
    if(demo.products.c3.c3_p4.prize != 0){
        createElementOfCart(base_productName_c3p4, base_productImage_c3p4,demo.products.c3.c3_p4.noOfProducts,demo.products.c3.c3_p4.prize);
    }
}
);
  var cartBtn=document.getElementById('clickMe');
  cartBtn.style.display='none';

  // var goToShopBtn=document.getElementById('goToShop');
  // goToShopBtn.style.display='block';

}



/////////////////////////////////////////////////////////////////////////////////////

// random()

// c1
base_productName_c1p1='c1_Product1'
base_productImage_c1p1='chakli20.jpg'

base_productName_c1p2='c1_Product2'
base_productImage_c1p2='chakli10.jpg'

base_productName_c1p3='c1_Product3'
base_productImage_c1p3='chakli10.jpg'

base_productName_c1p4='c1_Product4'
base_productImage_c1p4='chakli10.jpg'
// c2
base_productName_c2p1='c2_Product1'
base_productImage_c2p1='chakli10.jpg'

base_productName_c2p2='c2_Product2'
base_productImage_c2p2='chakli10.jpg'

base_productName_c2p3='c2_Product3'
base_productImage_c2p3='chakli10.jpg'

base_productName_c2p4='c2_Product4'
base_productImage_c2p4='chakli10.jpg'
// c3
base_productName_c3p1='c3_Product1'
base_productImage_c3p1='chakli10.jpg'

base_productName_c3p2='c3_Product2'
base_productImage_c3p2='chakli10.jpg'

base_productName_c3p3='c3_Product3'
base_productImage_c3p3='chakli10.jpg'

base_productName_c3p4='c3_Product4'
base_productImage_c3p4='chakli10.jpg'




// function random(){
//   firebase.database().ref("student/" + 8108070876).on("value", function(snap){
//         var demo = snap.val(); 
//         console.log(demo)
//         // c1
//         if(demo.products.c1.c1_p1.prize != 0){
//             createElementOfCart(base_productName_c1p1,base_productImage_c1p1,demo.products.c1.c1_p1.noOfProducts,demo.products.c1.c1_p1.prize);
//         }
//         if(demo.products.c1.c1_p2.prize != 0){
//             createElementOfCart(base_productName_c1p2, base_productImage_c1p2,demo.products.c1.c1_p2.noOfProducts,demo.products.c1.c1_p2.prize);
//         }
//         if(demo.products.c1.c1_p3.prize != 0){
//             createElementOfCart(base_productName_c1p3, base_productImage_c1p3,demo.products.c1.c1_p3.noOfProducts,demo.products.c1.c1_p3.prize);
//         }
//         if(demo.products.c1.c1_p4.prize != 0){
//             createElementOfCart(base_productName_c1p4, base_productImage_c1p4,demo.products.c1.c1_p4.noOfProducts,demo.products.c1.c1_p4.prize);
//         }
//         // c2
//         if(demo.products.c2.c2_p1.prize != 0){
//             createElementOfCart(base_productName_c2p1, base_productImage_c2p1,demo.products.c2.c2_p1.noOfProducts,demo.products.c2.c2_p1.prize);
//         }
//         if(demo.products.c2.c2_p2.prize != 0){
//             createElementOfCart(base_productName_c2p2, base_productImage_c2p2,demo.products.c2.c2_p2.noOfProducts,demo.products.c2.c2_p2.prize);
//         }
//         if(demo.products.c2.c2_p3.prize != 0){
//             createElementOfCart(base_productName_c2p3, base_productImage_c2p3,demo.products.c2.c2_p3.noOfProducts,demo.products.c2.c2_p3.prize);
//         }
//         if(demo.products.c2.c2_p4.prize != 0){
//             createElementOfCart(base_productName_c2p4, base_productImage_c2p4,demo.products.c2.c2_p4.noOfProducts,demo.products.c2.c2_p4.prize);
//         }
//         // c3
//         if(demo.products.c3.c3_p1.prize != 0){
//             createElementOfCart(base_productName_c3p1, base_productImage_c3p1,demo.products.c3.c3_p1.noOfProducts,demo.products.c3.c3_p1.prize);
//         }
//         if(demo.products.c3.c3_p2.prize != 0){
//             createElementOfCart(base_productName_c3p2, base_productImage_c3p2,demo.products.c3.c3_p2.noOfProducts,demo.products.c3.c3_p2.prize);
//         }
//         if(demo.products.c3.c3_p3.prize != 0){
//             createElementOfCart(base_productName_c3p3, base_productImage_c3p3,demo.products.c3.c3_p3.noOfProducts,demo.products.c3.c3_p3.prize);
//         }
//         if(demo.products.c3.c3_p4.prize != 0){
//             createElementOfCart(base_productName_c3p4, base_productImage_c3p4,demo.products.c3.c3_p4.noOfProducts,demo.products.c3.c3_p4.prize);
//         }
//     }
//     );
// }

// function createElementOfCart(pname,photo,pquantity,pprize){
//     var root=document.createElement('div');
//     var wrapper=document.createElement('div');

//     var img=document.createElement('img');
//     img.src=photo;
//     img.style.height='100px'
//     img.style.width='100px';

//     var p_name=document.createElement('span');
//     p_name.textContent=pname;
//     p_name.style.color='green'
    

//     var p_quantity=document.createElement('span');
//     p_quantity.textContent=pquantity;
//     p_quantity.style.color='pink';

//     var p_prize=document.createElement('span');
//     p_prize.textContent=pprize;
//     p_prize.style.color='red'

//     xyz=document.getElementById('wrappers');

//     wrapper.append(img,p_name,p_quantity,p_prize)
//     root.append(wrapper);
//     xyz.append(root);
//     // document.body.append(root);
// }



function createElementOfCart(pname,photo,pquantity,pprize){

  
  var root=document.createElement('div');
  var wrapper=document.createElement('div');
  var cross=document.createElement('button');
  cross.setAttribute('class','crossBtnClass')
  cross.setAttribute('id',pname)
  root.setAttribute('id','rt')
  wrapper.setAttribute('id','wr')

  console.log(pname+ ' hi pname here')
  console.log(cross.id);
  var crossId=cross.id;
  var c;
  console.log('cid '+crossId)
  
  cross.value='xyz'
  cross.textContent='X'
  cross.onclick=function(){
    console.log('in the cross function')
    console.log(crossId)
    
    cp='NULL';
    // c1
    if(crossId==base_productName_c1p1){
      cp='c1_p1'
      c='c1';
    }
    if(crossId==base_productName_c1p2){
      cp='c1_p2'
      c='c1';
    }
    if(crossId==base_productName_c1p3){
      cp='c1_p3'
      c='c1';
    }
    if(crossId==base_productName_c1p4){
      cp='c1_p4'
      c='c1';
    }
    // c2
    if(crossId==base_productName_c2p1){
      cp='c2_p1'
      c='c2';
    }
    if(crossId==base_productName_c2p2){
      cp='c2_p2'
      c='c2';
    }
    if(crossId==base_productName_c2p3){
      cp='c2_p3'
      c='c2';
    }
    if(crossId==base_productName_c2p4){
      cp='c2_p4'
      c='c2';
    }
    // c3
    if(crossId==base_productName_c3p1){
      cp='c3_p1'
      c='c3';
    }
    if(crossId==base_productName_c3p2){
      cp='c3_p2'
      c='c3';
    }
    if(crossId==base_productName_c3p3){
      cp='c3_p3'
      c='c3';
    }
    if(crossId==base_productName_c3p4){
      cp='c3_p4'
      c='c3';
    }
    



    var demo='student/'+uniqueId+'/products/'+c+'/'
    firebase.database().ref(demo+cp).update(
        {
            // rollNo: rollV,
            noOfProducts:0,
            prize: 0
        }        
    );
    window.location.href='cart.html'
    updatePrize();
    alert(cp+' has been removed from the cart')
  }
  // document.getElementById(cross.id).value = "test";

  var img=document.createElement('img');
  img.setAttribute('id','prImage');
  img.src=photo;
  img.style.height='100px'
  img.style.width='100px';
  img.style.borderRadius='8px'

  var p_name=document.createElement('span');
  p_name.textContent=pname;
  // p_name.style.color='black'
  p_name.style.backgroundColor='whitesmoke'
  

  var p_quantity=document.createElement('span');
  p_quantity.textContent=pquantity+' Packet';
  // p_quantity.style.color='pink';
  p_quantity.style.backgroundColor='whitesmoke'

  var p_prize=document.createElement('span');
  p_prize.textContent=pprize+' Rs';
  // p_prize.style.color='red'
  p_prize.style.backgroundColor='whitesmoke'

  xyz=document.getElementById('wrappers');

  wrapper.append(img,p_name,p_quantity,p_prize,cross)
  root.append(wrapper);
  xyz.append(root);
  // document.body.append(root);
}







var fname,emailV,t_titleV,t_contentV,ratingV;
function submitReview(){
    fnameV=document.getElementById('wpmtst_client_name').value;
    emailV=document.getElementById('wpmtst_email').value;
    t_titleV=document.getElementById('wpmtst_post_title').value;
    t_contentV=document.getElementById('wpmtst_post_content').value;
    ratingV=document.getElementById('wpmtst_star_rating').value;
    if(document.getElementById('star_rating-star1-3937').checked ){
        ratingV=1;
        console.log("1")
    }
    if(document.getElementById('star_rating-star2-3937').checked ){
        ratingV=2;
        console.log("2")
    }
    if(document.getElementById('star_rating-star3-3937').checked ){
        ratingV=3;
        console.log("3")
    }
    if(document.getElementById('star_rating-star4-3937').checked ){
        ratingV=4;
        console.log("4")
    }
    if(document.getElementById('star_rating-star5-3937').checked ){
        ratingV=5;
        console.log("5")
    }
    console.log(fnameV,emailV,t_titleV,t_contentV,ratingV)
    firebase.database().ref("Review/"+fnameV).set(
        {
            fname:fnameV,
            email:emailV,
            t_title:t_titleV,
            t_content:t_contentV,
            rating:ratingV
        }
    );
    alert("Data inserted 2");
}
