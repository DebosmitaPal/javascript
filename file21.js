const products=[
    {id:1,name:"Product1",description:"This is description",price:10000,category:"Laptop"},
    {id:2,name:"Product2",description:"This is description",price:5000,category:"Laptop"},
    {id:3,name:"Product3",description:"This is description",price:1500,category:"Laptop"},
    {id:4,name:"Product4",description:"This is description",price:10000,category:"Desktop"},
    {id:5,name:"Product5",description:"This is description",price:5000,category:"Desktop"},
    {id:6,name:"Product6",description:"This is description",price:1500,category:"Desktop"},
];
let category="ProductId"
let text=1
const resultArray=products.find(product => {
    return product.id===text;
});
console.log(resultArray);

//Incase of filter we will get array but in case of find we will get the object