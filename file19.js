const products=[
    {id:1,name:"Laptop",description:"This is laptop",price:10000},
    {id:2,name:"Mouse",description:"This is mouse",price:500},
    {id:3,name:"Keyboard",description:"This is keyboard",price:1500}
]
const cart=products.map(product => {
const obj={
    ...product,
    quantity:1,
    // total:product.price*product.quantity
};
    return obj;
});
console.log(cart);