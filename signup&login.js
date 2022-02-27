document.querySelector("#signForm").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
// var signupArr=[]
function myFormSubmit(event) {
 

  var signupObj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#password").value,

  };
  signupArr.push(signupObj);
  localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
  
 var pass1= document.querySelector("#password").value;
    pass2=document.querySelector("#password2").value;

 if(pass1=="")
 {
     alert("Please enter a password")
 }
 else if(pass1!=pass2){
  event.preventDefault();
     alert(" Password did not match")
 }
 else if(pass1==pass2){
   alert("signUp successful")
 }
}
 







var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
console.log(regdUsers);

document.querySelector("#loginForm").addEventListener("submit", formSubmit);

var form = document.querySelector("#loginForm");

// console.log(form.user.value);
// form.id.value
function formSubmit(event) {
  event.preventDefault();

  var user = form.loginEmail.value;
  var pass = form.loginPassword.value;
  console.log(user, pass);

var flag=false;
for(var i=0; i<regdUsers.length; i++)
{
 
  if(regdUsers[i].email==user && regdUsers[i].pass==pass)
  {
    flag=true
    
  }
}
if (flag==true)
{
  alert("success")
  window.location.href = "cart.html"

}
else{
  alert("login unccessful")
}
}
