//variables -> let,var,const
//const->we cannot reassign or change the value like in example
// const a=10;
// a=20;
//console.log(a)



//let->we  can updated the value.it is block level scope
// let a=10
// console.log(a)
// a=20
// console.log(a)



// let a=10
// function f1(){
//     let a=20
//     console.log(a)
// }
// f1()
// console.log(a)


// let a=10
// function f1(){
//     let a=20
//     if(3>1){
//         let a=30
//     console.log(a)
//     }
//     console.log(a)
// }
// f1()
// console.log(a)



//var is function level scope
var a=10
function f1(){
    var a=20
    if(3>1){
        var a=30
    console.log(a)
    }
    console.log(a)
}
f1()
console.log(a)


firstName="John" //camel case
first_name="John"
FirstName="John"  //title case-> mainly used for class