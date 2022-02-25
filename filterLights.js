document.querySelector("#categoriesdiv").style.display = "none"
document.querySelector("#materialsdiv").style.display = "none"
//Categories option display
document.querySelector("#categories").addEventListener("click", OptionC)

function OptionC() {
    var a = document.querySelector("#categoriesdiv").style.display
    // console.log(a)
    if (a == "none")
        document.querySelector("#categoriesdiv").style.display = "block"
    else {
        document.querySelector("#categoriesdiv").style.display = "none"
    }
}


//Materials option display
document.querySelector("#materials").addEventListener("click", OptionM)

function OptionM() {
    var a = document.querySelector("#materialsdiv").style.display
    // console.log(a)
    if (a == "none")
        document.querySelector("#materialsdiv").style.display = "block"
    else {
        document.querySelector("#materialsdiv").style.display = "none"
    }
}




