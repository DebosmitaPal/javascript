// const products=["product1","product2","product3"]
// products.forEach(product => {
//     console.log(product)
// });



// const products=[
//     {id:1,name:"Laptop",description:"This is laptop",price:10000},
//     {id:2,name:"Mouse",description:"This is mouse",price:500},
//     {id:3,name:"Keyboard",description:"This is keyboard",price:1500}
// ]
// const cart=[]
// products.forEach(product => {
//     console.log(product)
// })



const products=[
    {id:1,name:"Laptop",description:"This is laptop",price:10000},
    {id:2,name:"Mouse",description:"This is mouse",price:500},
    {id:3,name:"Keyboard",description:"This is keyboard",price:1500}
]
let cart=[]
products.forEach(product => {
//    product.quantity=1;
//    product.total=product.price*product.quantity;
const obj={
    ...product,
    quantity:1,
    total:product.price*product.quantity
}
    //cart.push(product)
    cart=[...cart,product]
})
console.log(cart);



// const products = [
//     {id:1, name:"Laptop", description:"This is laptop", price:10000},
//     {id:2, name:"Mouse", description:"This is mouse", price:500},
//     {id:3, name:"Keyboard", description:"This is keyboard", price:1500}
// ];
// const cart = [];
// products.forEach(product => {
//     cart.push(product);
// });
// const quantity = cart.length;
// let total = 0;
// cart.forEach(item => {
//     total += item.price;
// });
// console.log("Cart Items:", cart);
// console.log("Quantity:", quantity);
// console.log("Total Price:", total);
