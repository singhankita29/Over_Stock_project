var more_furniture=[
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular1.jpg?imwidth=200&impolicy=medium",name:"Spfas & Couches"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg?imwidth=200&impolicy=medium",name:"Sectional Sofas"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg?imwidth=200&impolicy=medium",name:"Living Room Seats"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg?imwidth=200&impolicy=medium",name:"Accent Tables"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg?imwidth=200&impolicy=medium",name:"Loveseats"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular6.jpg?imwidth=200&impolicy=medium",name:"Accent Chairs"},
    {image:"https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg?imwidth=200&impolicy=medium",name:"Dining Sets"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular8.jpg?imwidth=200&impolicy=medium",name:"Dining Tables"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg?imwidth=200&impolicy=medium",name:"Dining Chairs"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg?imwidth=200&impolicy=medium",name:"Buffets"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg?imwidth=200&impolicy=medium",name:"Bartools"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg?imwidth=200&impolicy=medium",name:"Beds"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg?imwidth=200&impolicy=medium",name:"Bedroom Sets"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg?imwidth=200&impolicy=medium",name:"Headboards"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg?imwidth=200&impolicy=medium",name:"Chests & Dresses"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200&impolicy=medium",name:"Nightstands"},
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg?imwidth=200&impolicy=medium",name:"Kids & Toddlers Beds"},
    {image:"https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg",name:"Shop All Furniture On Sale"}
];


more_furniture.map(function(element){

    var more_furniture_div = document.createElement("div");

     var pics = document.createElement("img");
     pics.setAttribute("src",element.image)

     var names= document.createElement("p");
     names.innerText=element.name;
     
    
     more_furniture_div.append(pics,names);
     document.querySelector("#more_furniture").append(more_furniture_div);
})