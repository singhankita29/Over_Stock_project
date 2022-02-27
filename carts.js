var dataLights = JSON.parse(localStorage.getItem("cartItems"));
// console.log(dataLights);
displayData(dataLights);
function displayData(dataLights) {
  document.querySelector("#container").innerHTML=null
  document.querySelector("#containerCont").innerHTML=null

  dataLights.map(function (elem, index) {
    var div = document.createElement("div");
    var section = document.createElement("section");

    var avtar = document.createElement("img");
    avtar.setAttribute("src", elem.image);

    var name = document.createElement("h5");
    name.innerText = elem.name;
    var catName = document.createElement("h2");
    name.innerText = elem.name;

    var price = document.createElement("h4");
    price.innerText = "Sale INR " + elem.price;

    var quant = document.createElement("h3");
    quant.innerText = "Quantity"+"="+" " + elem.quant;


    var btn2 = document.createElement("button");
    btn2.innerText = "-";
   
    var btn = document.createElement("button");
    btn.innerText = "+";

     btn2.addEventListener("click", function () {
      decreaseQuant(index);
    });

    btn.addEventListener("click", function () {
      increaseQuant(index);
    });


    section.append(name,catName, price, btn, quant,btn2);
    document.querySelector("#containerCont").append(section);
    
    div.append(avtar);
    document.querySelector("#container").append(div);
  });
}

function showTotal() {
  var total = dataLights.reduce(function (acc, elem) {
    return (acc += elem.price * elem.quant);
  }, 0);
 
  document.getElementById("total").textContent = "Your Total" + " =" +" "+ total;
  document.getElementById("discount").textContent =
    "  Promotions Applied" + " =" +"Rs"+" "+"0";
}
showTotal();
// //coupan func//
document.querySelector("#promo").addEventListener("click", formSubmit);
function formSubmit() {
  var coupon = document.querySelector("#coupon").value;

  if (coupon == "masai30") {
    //  alert("succ")
    var total = dataLights.reduce(function (acc, elem) {
      var tot = elem.price * elem.quant;
      var dis = elem.price * elem.quant * (30 / 100);
      return (acc += tot - dis);
    }, 0);
    document.querySelector("#total").innerText =
      "Your Total:" + " " + total;

    var dis = dataLights.reduce(function (acc, elem) {
      return (acc += elem.price * elem.quant * (30 / 100));
    }, 0);

    document.querySelector("#discount").innerText =
      "Discounts Rs." + "=" + dis;

    alert("Your coupon is applied");
    //   modal.style.display = "block";
    //   span.onclick = function() {
    //    modal.style.display = "none";
    //  }
  } else {
    alert(" Coupon NOT applied");
  }
}
function decreaseQuant(index) {
  // console.log(index);
  dataLights[index].quant--;
  console.log(dataLights);
  localStorage.setItem("cartItems", JSON.stringify(dataLights));
  displayData(dataLights); // this will show data when we move from men to cart//
  showTotal();
}

function increaseQuant(index) {
  // console.log(index);
  dataLights[index].quant++;
  console.log(dataLights);
  localStorage.setItem("cartItems", JSON.stringify(dataLights));
  displayData(dataLights); // this will show data when we move from men to cart//
  showTotal();
}
