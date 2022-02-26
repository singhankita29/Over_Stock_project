var selectedItem = JSON.parse(localStorage.getItem("showDetails"))
// console.log(selectedItem)
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

display(selectedItem)

function display(selectedItem) {
    // console.log(selectedItem.image)
    // var imgdiv = document.createElement("div")

    var img = document.createElement("img")
    img.src = selectedItem.image
    // img.style.width = "100%"
    document.querySelector(".first").append(img)

    var heading = document.createElement("h1")
    heading.innerText = selectedItem.name
    heading.style.margin = "0 0 15px 0";

    var price = document.createElement("p");
    price.innerText = "Sale Starts at INR " + selectedItem.price;
    price.style.color = "#c7202c";
    price.style.fontSize = "25px";
    price.style.fontWeight = "500";
    price.style.margin = "0 0 20px 0";
    price.style.padding = "7px 0 7px 0";


    var cartbutton = document.createElement("div")
    cartbutton.style.position = "relative"

    var button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.style.backgroundColor = "rgba(65, 142, 73, 0.85)"
    button.style.color = "white"
    button.style.width = "50%"
    button.style.fontSize = "18px"
    button.style.borderRadius = "5%"
    button.style.padding = "15px"
    button.style.margin = "0 0 20px 0"
    button.setAttribute("id", "cart");
    button.addEventListener("click", function () {
        addToCart(selectedItem);
    });

    var cartimg = document.createElement("img")
    cartimg.style.width = "30px"
    cartimg.style.position = "absolute"
    cartimg.style.left = "10px"
    cartimg.style.top = "10px"
    cartimg.style.zIndex = "3"
    cartimg.src =  "https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-cart-marketplace-itim2101-flat-itim2101.png"

    cartbutton.append(cartimg ,button)
    
    var offer = document.createElement("div")
    offer.style.width = "50%"
    // offer.style.border = "2px solid black"
    offer.style.boxShadow = "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px";
    offer.style.borderRadius = "5px "

    var para = document.createElement("p")
    para.style.padding = "10px 10px 10px 25px"

    para.innerHTML = `<ul>
    <li>100% Original Products</li>
    <li>Pay on delivery might be available</li>
    </ul>
    `
    offer.append(para)

    var option ={
        zoomwidth : 500,
        offset : {vertical: 0,horizonal : 300},
        scale : 2,
        zoomPosition : "original", 
    }

    new ImageZoom(document.querySelector(".first"),option)

    var sale = document.createElement("div")
    sale.style.width = "50%"
    sale.style.margin = "30px 0 20px 0"
    sale.style.color = "red"
    sale.style.padding = "10px"
    sale.style.boxShadow = "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px";
    sale.style.borderRadius = "5px "
    sale.innerHTML = `<p><strong>Hurry!!!</strong>
    Sale ends in <strong> 2 days </strong>. Use <strong><em>masai30</em></strong> and get <strong>30% OFF</strong>  </p>`
    document.querySelector(".second").append(heading, price, cartbutton,offer,sale)
}

function addToCart(item) {
    console.log(item)
    item.quant = 1
    cartItems.push(item)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}