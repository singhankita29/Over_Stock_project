var freshFind=[
    {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",name:"Furniture"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",name:"Area Rugs"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",name:"Bed & Bath"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",name:"Home Decor"},
    {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",name:"Window Treatments"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",name:"Kitchen"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",name:"Outdoor"},
    {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",name:"Home Improvement"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",name:"Storage"},
    {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",name:"Matresses"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",name:"Lighting"},
    {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",name:"Shop All Deal"}
    ];
    
    
    freshFind.map(function(element){
    
    var fresh_finds_div = document.createElement("div");
    
     var pics = document.createElement("img");
     pics.setAttribute("src",element.image)
    
     var names= document.createElement("p");
     names.innerText=element.name;
     
    
     fresh_finds_div.append(pics,names);
     document.querySelector("#fresh_finds").append(fresh_finds_div);
    })
    