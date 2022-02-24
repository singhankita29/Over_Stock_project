var dataLights = [
  
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/c206a6e24c9d1ab0cac54cd09e78213107cdccfd/Abalone-Glass-Pendant-Light-by-Hampton-Hill.jpg?imwidth=480&impolicy=medium",
    price: 7785,
    name: "Abalone Glass Pendant Light by Hampton Hill",
    quant:1
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/ba16879f61f0bb9bfcf3457a4f1b48acfc2da19d/CARRO-Libra-Sphere-1---Light-Single-Glass-Pendant-Light-Clear.jpg?imwidth=480&impolicy=medium",
    price: 8047,
    name: "CARRO Libra Sphere 1 - Single Glass Pendant Light-Clear",
    quant:1
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/4d515ccd1ed417ba78fa8434b8a78ce4e198b196/Vintage-Pendant-Lighting%2C-Adjustable-Farmhouse-Ceiling-Light-with-Glass-Shade-for-Restaurant%2C-Hallway%2C-Kitchen-Island.jpg?imwidth=480&impolicy=medium",
    price: 8516,
    name: "Vintage Pendant light with Glass",
    quant:1
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/19512234/Beveen-Round-3-Light-Glass-Gourde-Lamp-Collection-2b6f2744-8d09-4b19-b164-4fd94c02b5e3_600.jpg?imwidth=480&impolicy=medium",
    price: 10005,
    name: "Beveen Round 3-Light Glass Pendant Groude Lamp Collection",
    quant:1
  },

];


localStorage.setItem("dataLights",JSON.stringify(dataLights))
var dataLights = JSON.parse(localStorage.getItem("dataLights"))
console.log(dataLights)
