const products=[
    {id:1,name:"Product1",description:"This is description",price:10000,category:"Laptop"},
    {id:2,name:"Product2",description:"This is description",price:5000,category:"Laptop"},
    {id:3,name:"Product3",description:"This is description",price:1500,category:"Laptop"},
    {id:4,name:"Product4",description:"This is description",price:10000,category:"Desktop"},
    {id:5,name:"Product5",description:"This is description",price:5000,category:"Desktop"},
    {id:6,name:"Product6",description:"This is description",price:1500,category:"Desktop"},
];
// let search="Laptop"
// const resultArray=products.map(product => {
//     if(product.category===search){
//         return product;
//     }
// //    return null;
// });
// console.log(resultArray);



let search="Laptop"
const resultArray=products.filter(product => {
    return product.category===search;
});
console.log(resultArray);


