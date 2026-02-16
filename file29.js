// function add(a,b){
//     console.log(a)
//     console.log(b)
// }
// add(4,5);


// function add(){
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0]);
// }
// add(4,5,8,9);



// function add(...arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// const res = add(4, 5);
// console.log(res); 


const add=((...arr)=>{
   return arr.reduce((sum,num)=>sum+num,0)
   
})
console.log(add(4,5))
