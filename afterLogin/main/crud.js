random();
function random(){
 updatePrize
}


// c1
base_productName_c1p1 = 'Puranpoli'
base_productImage_c1p1 = './productImages/c1p1img.jpg'

base_productName_c1p2 = 'Bhajni_Chakli'
base_productImage_c1p2 = './productImages/c1p2img.jpg'

base_productName_c1p3 = 'Sweets_Shankarpali'
base_productImage_c1p3 = './productImages/c1p3img.jpg'

base_productName_c1p4 = 'Karanji'
base_productImage_c1p4 = './productImages/c1p4img.jpg'
// c2
base_productName_c2p1 = 'Rava_Ladoo'
base_productImage_c2p1 = './productImages/c2p1img.jpg'

base_productName_c2p2 = 'Nutri_Ladoo'
base_productImage_c2p2 = './productImages/c2p2img.jpg'

base_productName_c2p3 = 'Besan_Ladoo'
base_productImage_c2p3 = './productImages/c2p3img.jpg'

base_productName_c2p4 = 'Methi_Ladoo'
base_productImage_c2p4 = './productImages/c2p4img.jpg'
// c3
base_productName_c3p1 = 'Papdi'
base_productImage_c3p1 = './productImages/c3p1img.jpg'

base_productName_c3p2 = 'Patal_Poha_Chivda'
base_productImage_c3p2 = './productImages/c3p2img.jpg'

base_productName_c3p3 = 'Fulavlela_Poha_Chivda'
base_productImage_c3p3 = './productImages/c3p3img.jpg'

base_productName_c3p4 = 'Spicy_Shankarpali'
base_productImage_c3p4 = './productImages/c3p4img.jpeg'

base_productName_c3p5 = 'Garlic_Shev'
base_productImage_c3p5 = './productImages/c3p5img.jpg'

base_productName_c3p6 = 'Tikhat_Sev'
base_productImage_c3p6 = './productImages/c3p6img.jpg'

base_productImage_cart = './productImages/chak.jpg'



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
  if (c == "c3_p5") {
    c3_p5()
  }
  if (c == "c3_p6") {
    c3_p6()
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
  if (c == "c3_p5") {
    c3_p5()
  }
  if (c == "c3_p6") {
    c3_p6()
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
function c3_p5() {
  var val5 = document.getElementById('prize-of-product-c3p5').value;
  console.log(val5);
  var totalPrizeOfProduct5 = val5 * 100;
  console.log(totalPrizeOfProduct5)
  document.getElementById('total-prize-pr-c3p5').innerHTML = totalPrizeOfProduct5;
}
function c3_p6() {
  var val6 = document.getElementById('prize-of-product-c3p6').value;
  console.log(val6);
  var totalPrizeOfProduct6 = val6 * 100;
  console.log(totalPrizeOfProduct6)
  document.getElementById('total-prize-pr-c3p6').innerHTML = totalPrizeOfProduct6;
}


setStartVal()
function setStartVal() {
  new_c1_p1_count = 0, new_c1_p2_count = 0, new_c1_p3_count = 0, new_c1_p4_count = 0;
  new_c2_p1_count = 0, new_c2_p2_count = 0, new_c2_p3_count = 0, new_c2_p4_count = 0;
  new_c3_p1_count = 0, new_c3_p2_count = 0, new_c3_p3_count = 0, new_c3_p4_count = 0;new_c3_p5_count = 0;new_c3_p6_count = 0;
}





































// ADD TO CART FUNCTION

function addtocart(product) {
 
  if (product == 'c1_p1') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c1p1').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c1' + '/'
    firebase.database().ref(demo + 'c1_p1').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c1_p1_base_prize
      }
    );
    alert("Data 2 updated here");
   
  } else if (product == 'c1_p2') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c1p2').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c1' + '/'
    firebase.database().ref(demo + 'c1_p2').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c1_p2_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c1_p3') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c1p3').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c1' + '/'
    firebase.database().ref(demo + 'c1_p3').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c1_p3_base_prize
      }
    );
    alert("Data 2 updated here");

  } else if (product == 'c1_p4') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c1p4').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c1' + '/'
    firebase.database().ref(demo + 'c1_p4').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c1_p4_base_prize
      }
    );
    alert("Data 2 updated here");
  }
  else if (product == 'c2_p1') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c2p1').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c2' + '/'
    firebase.database().ref(demo + 'c2_p1').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c2_p1_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c2_p2') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c2p2').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c2' + '/'
    firebase.database().ref(demo + 'c2_p2').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c2_p2_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c2_p3') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c2p3').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c2' + '/'
    firebase.database().ref(demo + 'c2_p3').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c2_p3_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c2_p4') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c2p4').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c2' + '/'
    firebase.database().ref(demo + 'c2_p4').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c2_p4_base_prize
      }
    );
    alert("Data 2 updated here");
  }
  else if (product == 'c3_p1') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p1').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p1').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p1_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c3_p2') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p2').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p2').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p2_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c3_p3') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p3').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p3').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p3_base_prize
      }
    );
    alert("Data 2 updated here");
  } else if (product == 'c3_p4') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p4').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p4').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p4_base_prize
      }
    );
    alert("Data 2 updated here");
  }else if (product == 'c3_p5') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p5').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p5').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p5_base_prize
      }
    );
    alert("Data 2 updated here");
  }else if (product == 'c3_p6') {
    console.log("clicked");
    var quantity = document.getElementById('quantity-of-product-c3p6').value;
    console.log(quantity);
    console.log(uniqueId)

    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c3' + '/'
    firebase.database().ref(demo + 'c3_p6').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c3_p6_base_prize
      }
    );
    alert("Data 2 updated here");
  }



  updatePrize();
  alert('Added To cart');

}

/////////////////////////////BASE PRIZE OF PRODUCTS///////////////////////////
const c1_p1_base_prize = 200;
const c1_p2_base_prize = 150;
const c1_p3_base_prize = 140;
const c1_p4_base_prize = 190;

const c2_p1_base_prize = 200;
const c2_p2_base_prize = 270;
const c2_p3_base_prize = 250;
const c2_p4_base_prize = 260;

const c3_p1_base_prize = 140;//
const c3_p2_base_prize = 130;
const c3_p3_base_prize = 130;//
const c3_p4_base_prize = 130;
const c3_p5_base_prize = 140;
const c3_p6_base_prize = 140;
////////////////////////////////////////////////////////////////////////////////

var val = localStorage.getItem("inputValue1");
var uniqueId = val;


function updatePrize() {
console.log('called updateprize')
  firebase.database().ref("RegisterInfo/" + uniqueId).on("value", function (snap) {
    var demo = snap.val();
    var finalPrize = demo.products.c1.c1_p1.prize + demo.products.c1.c1_p2.prize + demo.products.c1.c1_p3.prize + demo.products.c1.c1_p4.prize + demo.products.c2.c2_p1.prize + demo.products.c2.c2_p2.prize + demo.products.c2.c2_p3.prize + demo.products.c2.c2_p4.prize + demo.products.c3.c3_p1.prize + demo.products.c3.c3_p2.prize + demo.products.c3.c3_p3.prize + demo.products.c3.c3_p4.prize + demo.products.c3.c3_p5.prize + demo.products.c3.c3_p6.prize;
    console.log('finalprize: ' + finalPrize);
    console.log(demo.products.c1.c1_p1.prize + demo.products.c1.c1_p2.prize + demo.products.c1.c1_p3.prize + demo.products.c1.c1_p4.prize + demo.products.c2.c2_p1.prize + demo.products.c2.c2_p2.prize + demo.products.c2.c2_p3.prize + demo.products.c2.c2_p4.prize + demo.products.c3.c3_p1.prize + demo.products.c3.c3_p2.prize + demo.products.c3.c3_p3.prize + demo.products.c3.c3_p4.prize + demo.products.c3.c3_p5.prize + demo.products.c3.c3_p6.prize)

    // document.getElementById('prize-of-cart').innerHTML=100;

    newUpdatedPrize(finalPrize);

    console.log(demo.totalprize);
    document.getElementsByClassName('cart-prize').innerText=demo.totalprize;
    document.getElementById('prize-of-cart').innerText = demo.totalprize;
    document.getElementById('prize-of-carts').innerText = demo.totalprize;
    document.getElementById('prize-of-cart1').innerText = demo.totalprize;

  }
  );
}
function newUpdatedPrize(finalPrize) {
  console.log('new')
  firebase.database().ref('RegisterInfo/' + uniqueId).update(
    {
      // rollNo: rollV,
      totalprize: finalPrize
    }
  );
}
window.onload = function () {
  updatePrize();
};


function isCartEmpty(){
  var a=2;
  console.log("in cart empty");
  firebase.database().ref("RegisterInfo/" + uniqueId).on("value", function (snap) {
    var demo = snap.val();
    if(demo.totalprize==0){
      console.log("empty");
      a=1;
      xyz(a);
      console.log(a);
    }else{
      a=0;
      xyz(a);
      console.log("in eslse");
    }
  });
  return a;
}

document.getElementById('clickMe').onclick = function () {
  // t=0;
  console.log('hereisCArt'+isCartEmpty())
  if(isCartEmpty() == "1"){
    console.log("InEmp")
    document.getElementById('cart-is-empty').style.display='block';
    alert('cart is empty');
    return
  }
  // window.location.href='cart.html';
  console.log('in want')
  firebase.database().ref("RegisterInfo/" + uniqueId).on("value", function (snap) {
    var demo = snap.val();
    console.log(demo)
    var t=0;
    // c1
    if (demo.products.c1.c1_p1.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c1p1, base_productImage_c1p1, demo.products.c1.c1_p1.noOfProducts, demo.products.c1.c1_p1.prize);
    }
    if (demo.products.c1.c1_p2.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c1p2, base_productImage_c1p2, demo.products.c1.c1_p2.noOfProducts, demo.products.c1.c1_p2.prize);
    }
    if (demo.products.c1.c1_p3.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c1p3, base_productImage_c1p3, demo.products.c1.c1_p3.noOfProducts, demo.products.c1.c1_p3.prize);
    }
    if (demo.products.c1.c1_p4.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c1p4, base_productImage_c1p4, demo.products.c1.c1_p4.noOfProducts, demo.products.c1.c1_p4.prize);
    }
    // c2
    if (demo.products.c2.c2_p1.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c2p1, base_productImage_c2p1, demo.products.c2.c2_p1.noOfProducts, demo.products.c2.c2_p1.prize);
    }
    if (demo.products.c2.c2_p2.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c2p2, base_productImage_c2p2, demo.products.c2.c2_p2.noOfProducts, demo.products.c2.c2_p2.prize);
    }
    if (demo.products.c2.c2_p3.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c2p3, base_productImage_c2p3, demo.products.c2.c2_p3.noOfProducts, demo.products.c2.c2_p3.prize);
    }
    if (demo.products.c2.c2_p4.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c2p4, base_productImage_c2p4, demo.products.c2.c2_p4.noOfProducts, demo.products.c2.c2_p4.prize);
    }
    // c3
    if (demo.products.c3.c3_p1.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p1, base_productImage_c3p1, demo.products.c3.c3_p1.noOfProducts, demo.products.c3.c3_p1.prize);
    }
    if (demo.products.c3.c3_p2.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p2, base_productImage_c3p2, demo.products.c3.c3_p2.noOfProducts, demo.products.c3.c3_p2.prize);
    }
    if (demo.products.c3.c3_p3.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p3, base_productImage_c3p3, demo.products.c3.c3_p3.noOfProducts, demo.products.c3.c3_p3.prize);
    }
    if (demo.products.c3.c3_p4.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p4, base_productImage_c3p4, demo.products.c3.c3_p4.noOfProducts, demo.products.c3.c3_p4.prize);
    }
    if (demo.products.c3.c3_p5.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p5, base_productImage_c3p5, demo.products.c3.c3_p5.noOfProducts, demo.products.c3.c3_p5.prize);
    }
    if (demo.products.c3.c3_p6.prize != 0) {
      t=1;
      createElementOfCart(base_productName_c3p6, base_productImage_c3p6, demo.products.c3.c3_p6.noOfProducts, demo.products.c3.c3_p6.prize);
    }



    if(t==1){
      var cartBtn = document.getElementById('clickMe');
      cartBtn.style.display = 'none';
      console.log("insf t=1")
      document.getElementById('buy-all').style.display='block';
    }else{
      alert("cart is empty");
      document.getElementById('cart-is-empty').style.display='block';
      return
      var cartBtn = document.getElementById('clickMe');
      // cartBtn.style.display = 'none';
    }
  }
  );
  // var cartBtn = document.getElementById('clickMe');
  // cartBtn.style.display = 'none';
  console.log("out"+t)
 
  // document.getElementById('buy-all').style.display='block';

}


function createElementOfOrders(nop,p_id,product_name,totalPrize,photo){
  var root = document.createElement('div');
  var wrapper = document.createElement('div');
  root.setAttribute('id', 'rt')
  wrapper.setAttribute('id', 'wr')
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id','newDiv');
  var img = document.createElement('img');
  img.setAttribute('id', 'prImage');
  img.src = photo;
  img.style.height = '120px'
  img.style.width = '100%';
  img.style.borderRadius = '8px'

  var numberOfProducts = document.createElement('div');
  numberOfProducts.textContent ='quantity: '+ nop;
  // p_name.style.color='black'
  // numberOfProducts.style.backgroundColor = 'whitesmoke'

  var pname = document.createElement('div');
  pname.textContent ='Name:'+ product_name;
  // p_name.style.color='black'
  pname.style.width='auto';
  pname.style.overflow='auto';
  // pname.style.backgroundColor = 'whitesmoke'


  var pay_id = document.createElement('div');
  pay_id.textContent ='pid: '+ p_id;
  // p_quantity.style.color='pink';
  // pay_id.style.backgroundColor = 'whitesmoke'

  var p_prize = document.createElement('div');
  p_prize.textContent = 'prize: '+totalPrize + ' Rs';
  // p_prize.style.color='red'
  // p_prize.style.backgroundColor = 'whitesmoke'

  xyz = document.getElementById('wrappers');
  newDiv.append(pay_id,pname,numberOfProducts, p_prize)
  wrapper.append(img,  newDiv)
  root.append(wrapper);
  xyz.append(root);
  var cartBtn = document.getElementById('viewOrders');
  cartBtn.style.display = 'none';
  // document.getElementById('viewOrders').style.display='block';
  
}


function createElementOfCart(pname, photo, pquantity, pprize) {


  var root = document.createElement('div');
  var wrapper = document.createElement('div');
  var cross = document.createElement('button');
  cross.setAttribute('class', 'crossBtnClass')
  cross.setAttribute('id', pname)
  root.setAttribute('id', 'rt')
  wrapper.setAttribute('id', 'wr')

  console.log(pname + ' hi pname here')


  console.log(cross.id);
  var crossId = cross.id;
  var c;
  console.log('cid ' + crossId)

  cross.value = 'xyz'
  cross.textContent = 'remove'
  cross.onclick = function () {
    console.log('in the cross function')
    console.log(crossId)

    cp = 'NULL';
    // c1
    if (crossId == base_productName_c1p1) {
      cp = 'c1_p1'
      c = 'c1';
    }
    if (crossId == base_productName_c1p2) {
      cp = 'c1_p2'
      c = 'c1';
    }
    if (crossId == base_productName_c1p3) {
      cp = 'c1_p3'
      c = 'c1';
    }
    if (crossId == base_productName_c1p4) {
      cp = 'c1_p4'
      c = 'c1';
    }
    // c2
    if (crossId == base_productName_c2p1) {
      cp = 'c2_p1'
      c = 'c2';
    }
    if (crossId == base_productName_c2p2) {
      cp = 'c2_p2'
      c = 'c2';
    }
    if (crossId == base_productName_c2p3) {
      cp = 'c2_p3'
      c = 'c2';
    }
    if (crossId == base_productName_c2p4) {
      cp = 'c2_p4'
      c = 'c2';
    }
    // c3
    if (crossId == base_productName_c3p1) {
      cp = 'c3_p1'
      c = 'c3';
    }
    if (crossId == base_productName_c3p2) {
      cp = 'c3_p2'
      c = 'c3';
    }
    if (crossId == base_productName_c3p3) {
      cp = 'c3_p3'
      c = 'c3';
    }
    if (crossId == base_productName_c3p4) {
      cp = 'c3_p4'
      c = 'c3';
    }
    if (crossId == base_productName_c3p5) {
      cp = 'c3_p5'
      c = 'c3';
    }
    if (crossId == base_productName_c3p6) {
      cp = 'c3_p6'
      c = 'c3';
    }



    var demo = 'RegisterInfo/' + uniqueId + '/products/' + c + '/'
    firebase.database().ref(demo + cp).update(
      {
        // rollNo: rollV,
        noOfProducts: 0,
        prize: 0
      }
    );

    window.location.href = 'cart.html'
    updatePrize();
    alert(cp + ' has been removed from the cart')
  }
  // document.getElementById(cross.id).value = "test";

  var img = document.createElement('img');
  img.setAttribute('id', 'prImage');
  img.src = photo;
  img.style.height = '120px';
  img.style.width = '200px';
  img.style.borderRadius = '8px'
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id','newDiv');
  var p_name = document.createElement('div');
  p_name.textContent = pname;
  // p_name.style.color='black'
  p_name.style.backgroundColor = 'whitesmoke'

  var btnDiv=document.createElement('div');
  btnDiv.setAttribute('id','btnDiv');
  var p_quantity = document.createElement('div');
  p_quantity.textContent = pquantity + ' Packet';
  // p_quantity.style.color='pink';
  p_quantity.style.backgroundColor = 'whitesmoke'

  var p_prize = document.createElement('div');
  p_prize.textContent = pprize + ' Rs';
  // p_prize.style.color='red'
  p_prize.style.backgroundColor = 'whitesmoke'
  btnDiv.append(cross);
  xyz = document.getElementById('wrappers');
  newDiv.append(p_name,p_quantity, p_prize, btnDiv);
  wrapper.append(img, newDiv)
  root.append(wrapper);
  xyz.append(root);
  // document.body.append(root);
}




function addToCart(c) {
  if (c == 'c1p1') {
    console.log("clicked");
    var quantity = document.getElementById('quantity_of_c1p1').value;
    console.log(quantity);


    console.log("in the add to cart function");
    var demo = 'RegisterInfo/' + uniqueId + '/products/' + 'c1' + '/'
    firebase.database().ref(demo + 'c1_p1').update(
      {

        // rollNo: rollV,
        noOfProducts: quantity,
        prize: quantity * c1_p1_base_prize
      }
    );
    alert("Data 2 updated here");
  }

}



function viewOrders(){
  console.log("In view ordesr");
  // console.log('hereisCArt'+isCartEmpty())
  
  // window.location.href='cart.html';
  console.log('in want')
  firebase.database().ref("RegisterInfo/" + uniqueId).on("value", function (snap) {
    var demo = snap.val();
    console.log(demo)
console.log("hjjjjjjjjjjjjjjjjjjjjjjjjjj")
    console.log(demo.hasOwnProperty('orders'));   //exists
    if(demo.hasOwnProperty('orders')){
      console.log("hahahh")
      for (const key in demo.orders) {
        var numberOfProducts=demo.orders[key].numberOfProducts;
        var pay_id= demo.orders[key].pay_id;
        var product_name= demo.orders[key].product_name;
        var totalPrize = demo.orders[key].totalPrize;
        console.log(numberOfProducts,pay_id,product_name,totalPrize)
        if(product_name == base_productName_c1p1){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c1p1);
          continue;
        }
        if(product_name == base_productName_c1p2){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c1p2);
          continue;
        }
        if(product_name == base_productName_c1p3){
          createElementOfOrders(numberOfProducts+"(')",pay_id,product_name,totalPrize,base_productImage_c1p3);
          continue;
        }
        if(product_name == base_productName_c1p4){
          createElementOfOrders(numberOfProducts+"(')",pay_id,product_name,totalPrize,base_productImage_c1p4);
          continue;
        }
        if(product_name == base_productName_c2p1){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c2p1);
          continue;
        }
        if(product_name == base_productName_c2p2){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c2p2);
          continue;
        }
        if(product_name == base_productName_c2p3){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c2p3);
          continue;
        }
        if(product_name == base_productName_c2p4){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c2p4);
          continue;
        }
        if(product_name == base_productName_c3p1){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p1);
          continue;
        }
        if(product_name == base_productName_c3p2){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p2);
          continue;
        }
        if(product_name == base_productName_c3p3){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p3);
          continue;
        }
        if(product_name == base_productName_c3p4){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p4);
          continue;
        }
        if(product_name == base_productName_c3p5){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p5);
          continue;
        }
        if(product_name == base_productName_c3p6){
          createElementOfOrders(numberOfProducts,pay_id,product_name,totalPrize,base_productImage_c3p6);
          continue;
        }
        
        
        createElementOfOrders(numberOfProducts+"(*)",pay_id,product_name,totalPrize,base_productImage_cart);

        
      }
      // var p_name=
      // createElementOfOrders()
    }else{
      alert('No Orders placed');c
      document.getElementById('cart-is-empty').style.display='block';
    }


    // c1
  //   if (demo.products.c1.c1_p1.prize != 0) {
  //     createElementOfCart(base_productName_c1p1, base_productImage_c1p1, demo.products.c1.c1_p1.noOfProducts, demo.products.c1.c1_p1.prize);
  //   }
  //   if (demo.products.c1.c1_p2.prize != 0) {
  //     createElementOfCart(base_productName_c1p2, base_productImage_c1p2, demo.products.c1.c1_p2.noOfProducts, demo.products.c1.c1_p2.prize);
  //   }
  //   if (demo.products.c1.c1_p3.prize != 0) {
  //     createElementOfCart(base_productName_c1p3, base_productImage_c1p3, demo.products.c1.c1_p3.noOfProducts, demo.products.c1.c1_p3.prize);
  //   }
  //   if (demo.products.c1.c1_p4.prize != 0) {
  //     createElementOfCart(base_productName_c1p4, base_productImage_c1p4, demo.products.c1.c1_p4.noOfProducts, demo.products.c1.c1_p4.prize);
  //   }
  //   // c2
  //   if (demo.products.c2.c2_p1.prize != 0) {
  //     createElementOfCart(base_productName_c2p1, base_productImage_c2p1, demo.products.c2.c2_p1.noOfProducts, demo.products.c2.c2_p1.prize);
  //   }
  //   if (demo.products.c2.c2_p2.prize != 0) {
  //     createElementOfCart(base_productName_c2p2, base_productImage_c2p2, demo.products.c2.c2_p2.noOfProducts, demo.products.c2.c2_p2.prize);
  //   }
  //   if (demo.products.c2.c2_p3.prize != 0) {
  //     createElementOfCart(base_productName_c2p3, base_productImage_c2p3, demo.products.c2.c2_p3.noOfProducts, demo.products.c2.c2_p3.prize);
  //   }
  //   if (demo.products.c2.c2_p4.prize != 0) {
  //     createElementOfCart(base_productName_c2p4, base_productImage_c2p4, demo.products.c2.c2_p4.noOfProducts, demo.products.c2.c2_p4.prize);
  //   }
  //   // c3
  //   if (demo.products.c3.c3_p1.prize != 0) {
  //     createElementOfCart(base_productName_c3p1, base_productImage_c3p1, demo.products.c3.c3_p1.noOfProducts, demo.products.c3.c3_p1.prize);
  //   }
  //   if (demo.products.c3.c3_p2.prize != 0) {
  //     createElementOfCart(base_productName_c3p2, base_productImage_c3p2, demo.products.c3.c3_p2.noOfProducts, demo.products.c3.c3_p2.prize);
  //   }
  //   if (demo.products.c3.c3_p3.prize != 0) {
  //     createElementOfCart(base_productName_c3p3, base_productImage_c3p3, demo.products.c3.c3_p3.noOfProducts, demo.products.c3.c3_p3.prize);
  //   }
  //   if (demo.products.c3.c3_p4.prize != 0) {
  //     createElementOfCart(base_productName_c3p4, base_productImage_c3p4, demo.products.c3.c3_p4.noOfProducts, demo.products.c3.c3_p4.prize);
  //   }
  // }
  // );
  // var cartBtn = document.getElementById('clickMe');
  // cartBtn.style.display = 'none';

})}

document.getElementById('viewOrders').onclick = function () {
  console.log("in orders");
  // return;

  // console.log('hereisCArt'+isCartEmpty())
  // if(isCartEmpty() == "1"){
  //   console.log("InEmp")
  //   document.getElementById('cart-is-empty').style.display='block';
  //   alert('cart is empty');
  //   return
  // }
  // // window.location.href='cart.html';
  // console.log('in want')
  // firebase.database().ref("RegisterInfo/" + uniqueId).on("value", function (snap) {
  //   var demo = snap.val();
  //   console.log(demo)
  //   // c1
  //   if (demo.products.c1.c1_p1.prize != 0) {
  //     createElementOfCart(base_productName_c1p1, base_productImage_c1p1, demo.products.c1.c1_p1.noOfProducts, demo.products.c1.c1_p1.prize);
  //   }
  //   if (demo.products.c1.c1_p2.prize != 0) {
  //     createElementOfCart(base_productName_c1p2, base_productImage_c1p2, demo.products.c1.c1_p2.noOfProducts, demo.products.c1.c1_p2.prize);
  //   }
  //   if (demo.products.c1.c1_p3.prize != 0) {
  //     createElementOfCart(base_productName_c1p3, base_productImage_c1p3, demo.products.c1.c1_p3.noOfProducts, demo.products.c1.c1_p3.prize);
  //   }
  //   if (demo.products.c1.c1_p4.prize != 0) {
  //     createElementOfCart(base_productName_c1p4, base_productImage_c1p4, demo.products.c1.c1_p4.noOfProducts, demo.products.c1.c1_p4.prize);
  //   }
  //   // c2
  //   if (demo.products.c2.c2_p1.prize != 0) {
  //     createElementOfCart(base_productName_c2p1, base_productImage_c2p1, demo.products.c2.c2_p1.noOfProducts, demo.products.c2.c2_p1.prize);
  //   }
  //   if (demo.products.c2.c2_p2.prize != 0) {
  //     createElementOfCart(base_productName_c2p2, base_productImage_c2p2, demo.products.c2.c2_p2.noOfProducts, demo.products.c2.c2_p2.prize);
  //   }
  //   if (demo.products.c2.c2_p3.prize != 0) {
  //     createElementOfCart(base_productName_c2p3, base_productImage_c2p3, demo.products.c2.c2_p3.noOfProducts, demo.products.c2.c2_p3.prize);
  //   }
  //   if (demo.products.c2.c2_p4.prize != 0) {
  //     createElementOfCart(base_productName_c2p4, base_productImage_c2p4, demo.products.c2.c2_p4.noOfProducts, demo.products.c2.c2_p4.prize);
  //   }
  //   // c3
  //   if (demo.products.c3.c3_p1.prize != 0) {
  //     createElementOfCart(base_productName_c3p1, base_productImage_c3p1, demo.products.c3.c3_p1.noOfProducts, demo.products.c3.c3_p1.prize);
  //   }
  //   if (demo.products.c3.c3_p2.prize != 0) {
  //     createElementOfCart(base_productName_c3p2, base_productImage_c3p2, demo.products.c3.c3_p2.noOfProducts, demo.products.c3.c3_p2.prize);
  //   }
  //   if (demo.products.c3.c3_p3.prize != 0) {
  //     createElementOfCart(base_productName_c3p3, base_productImage_c3p3, demo.products.c3.c3_p3.noOfProducts, demo.products.c3.c3_p3.prize);
  //   }
  //   if (demo.products.c3.c3_p4.prize != 0) {
  //     createElementOfCart(base_productName_c3p4, base_productImage_c3p4, demo.products.c3.c3_p4.noOfProducts, demo.products.c3.c3_p4.prize);
  //   }
  // }
  // );
  // var cartBtn = document.getElementById('clickMe');
  // cartBtn.style.display = 'none';


}
