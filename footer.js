var footerA = document.createElement("div")
var footerB = document.createElement("div")

footerA.innerHTML = `<div id="footer1">
<div>
  <span>MY ACCOUNT</span>
  <p>Orders & Returns</p>
  <p>Email Preferences</p>
  <p>Account Settings</p>
</div>
<div>
  <span>LET US HELP</span>
  <p>Contact Customer Care</p>
  <p>Shipping Information</p>
  <p>Return Policy</p>
  <p>International Help</p>
  <p>Accessibility</p>
</div>
<div>
  <span>COMPANY INFORMATION</span>
  <p>About Overstock™</p>
  <p>Careers</p>
  <p>Investor Relations</p>
  <p>Sell Your Products</p>
  <p>Supply Chain Tranperancy</p>
</div>
<div>
  <span>MORE WAYS TO SHOP</span>
  <p>Tips & Ideas</p>
  <p>Deals</p>
  <p>Clearance</p>
  <p>New Arrivals</p>
</div>
</div>
<div id="footer2">
<div>
  <div>
    <p>© Copyright 2022, Overstock.com®, Inc.</p>
    <p>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
  </div>
  <div id="ind">
    <span>Privacy Policy</span>
    <span>Terms & Conditions</span>
    <span>*Promotion Terms</span>
    <span>Ship to:</span>
    <img
      src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
      alt="flag India"
    />
  </div>
</div>
</div>`
document.querySelector("#footerA").append(footerA)


footerB.innerHTML = `        <div id="footer1B">
<div>
  <p>My Accout</p>
  <p>Email Preferences</p>
  <p>Help</p>
</div>
<div>
  <p>Do Not Sell My Information</p>
  <p>Privacy Policy</p>
  <p>Terms & Conditions</p>
  <p>*Promotion Terms</p>
</div>
</div>
<div id="footer2B">
<div>
  <span>Ship to:</span>
  <img
    src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
    alt="flag India"
  />
</div>
<div>
  <div>
    <p>© Copyright 2022, Overstock.com®, Inc.</p>
    <p >799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
  </div>
</div>
</div>`

document.querySelector("#footerB").append(footerB)