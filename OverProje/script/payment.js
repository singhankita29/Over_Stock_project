document.querySelector("#form").addEventListener("submit",myForm);
function myForm(event){
    // event.preventDefault();
    var cardName=document.querySelector("#name").value;
    var cardNum=document.querySelector("#cardno").value;
    var cV=document.querySelector("#cvv").value;
    // console.log(cardName,cardNum,cV)

    if(cardName=="aman"&&cardNum==647786686158&&cV==123)
    {
        window.location.href="cart.html"
        alert( "Payment Sunccessful")
    }
    else{
       alert("UnSuccessful")
    }
}