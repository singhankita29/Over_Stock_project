var dataLights = JSON.parse(localStorage.getItem("dataLights"));
// console.log(dataLights)
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

display(dataLights);
function display(dataLights) {
    document.querySelector("#product").innerHTML = "";
    dataLights.map(function (item) {
        var div = document.createElement("div");
        var divimg = document.createElement("div");
        divimg.style.position = "relative";
        divimg.style.zIndex = "-1";



        var img = document.createElement("img");
        // console.log(item.src)
        img.src = item.image;
        img.style.width = "100%";
        img.style.justifyContent = "spacearound";

        // img.style.position = "absolute";

        var like = document.createElement("img");
        like.src = "https://img.icons8.com/fluency/48/000000/like.png"
        like.style.width = "30px";
        like.style.position = "absolute";
        like.style.top = "5px";
        like.style.right = "5px";

        divimg.append(img, like)

        var price = document.createElement("p");
        price.innerText = "Sale INR " + item.price;
        price.style.color = "#c7202c";
        price.style.fontSize = "20px";
        price.style.fontWeight = "500";
        price.style.margin = "0";
        price.style.padding = "7px 7px 0 0";

        var text = document.createElement("P");
        text.innerText = item.name;
        text.style.fontSize = "14px";
        text.setAttribute("id","productName")
        text.style.padding = "7px 7px 0 0";
        text.style.marginTop = "0";


        // var button = document.createElement("button");
        // button.innerText = "Add to Cart";
        // button.style.backgroundColor = "black"
        // // button.style.marginTop = "30%"
        // button.style.color = "white"
        // button.style.padding = "5px"
        // button.style.marginBottom = "22%"
        // button.setAttribute("id", "cart");
        // button.addEventListener("click", function () {
        //     addToCart(item);
        // });

        var see = document.createElement("span")
        see.innerText = "Details"
        see.style.textDecoration = "underline"
        see.setAttribute("id", "detail");
        see.addEventListener("click", function () {
            var selectedItem = item
            console.log(selectedItem)
            localStorage.setItem("showDetails",JSON.stringify(selectedItem))
            window.open('productDetail.html', '_blank');
        });

        var content = document.createElement("div");
        content.append(price, text);
        content.style.width = "80%";      
        content.style.paddingLeft = "5px";
        content.style.paddingBottom = "5px";

        var show = document.createElement("div");
        show.style.padding = "2%";
        show.style.verticalAlign = "certre";
        show.append( see);

        var main = document.createElement("div");
        main.append(content, show);
        main.style.display = "flex";
        div.append(divimg, main);
        document.querySelector("#product").append(div);
    });
}

//Add to cart
// function addToCart(item) {
//     console.log(item)
//     item.quant = 1
//     cartItems.push(item)
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
// }

//Sort by price
document.querySelector("#sort").addEventListener("change", function () {
    if (filterData.length == 0) {
        priceSort(dataLights)
    }
    else {
        priceSort(filterData)
    }
});
function priceSort(dataLights) {
    var getValue = document.querySelector("#sort").value;
    console.log(getValue);
    if (getValue == "h2l") {
        var x = dataLights.sort(function (a, b) {
            return b.price - a.price;
        });
        display(x);
    } else if (getValue == "l2h") {
        var y = dataLights.sort(function (a, b) {
            return a.price - b.price;
        });
        display(y);
    } else {
        dataLights = filterData || JSON.parse(localStorage.getItem("dataLights"));
        display(dataLights);
    }
}

//category filter event listner
document.querySelector("#c1").addEventListener("click", function () {
    var cate = catefxn(document.querySelector("#c1").innerText, dataLights)
})
document.querySelector("#c2").addEventListener("click", function () {
    var cate = catefxn(document.querySelector("#c2").innerText, dataLights)
})
document.querySelector("#c3").addEventListener("click", function () {
    var cate = catefxn(document.querySelector("#c3").innerText, dataLights)
})

//material filter event listner
document.querySelector("#m1").addEventListener("click", function () {
    var mate = matefxn(document.querySelector("#m1").innerText, dataLights)
})
document.querySelector("#m2").addEventListener("click", function () {
    var mate = matefxn(document.querySelector("#m2").innerText, dataLights)
})
document.querySelector("#m3").addEventListener("click", function () {
    var mate = matefxn(document.querySelector("#m3").innerText, dataLights)
})

var filterData = []
function catefxn(text, dataLights) {
    // console.log(text)
    // console.log(dataLights)
    filterData = dataLights.filter(function (item) {
        if (item.category == text) {
            return item
        }
    })
    // priceSort(filterData)
    console.log(filterData)
    priceSort(filterData)
}

function matefxn(text, dataLights) {
    filterData = dataLights.filter(function (item) {
        if (item.material == text) {
            return item
        }
    })
    console.log(filterData)
    // priceSort(filterData)
    priceSort(filterData)
}

function showDetails(item) {
    console.log(1)
}


function hideDetails(item) {
    console.log(1)
}