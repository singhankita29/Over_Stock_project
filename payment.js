document.querySelector("#form").addEventListener("submit",myForm);
function myForm(event){
    event.preventDefault();
    var cardName=document.querySelector("#name").value;
    var cardNum=document.querySelector("#cardno").value;
    var cV=document.querySelector("#cvv").value;
    // console.log(cardName,cardNum,cV)
// modal start
var modal1 = document.getElementById("myModal1");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// modal ended
    if(cardName=="aman"&&cardNum==647786686158&&cV==123)
    {
        let tID = setTimeout(function () {
            window.location.href="index.html"
            window.clearTimeout(tID);	// clear time out.
        }, 2000);
        modal1.style.display = "block";
        // span.onclick = function() {
        //     modal.style.display = "none";
        //   }

    }
    else{
 
       modal.style.display = "block";
       span.onclick = function() {
        modal.style.display = "none";
      }
      
    }
}
