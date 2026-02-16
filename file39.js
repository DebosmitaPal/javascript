//Hoisting with var
// console.log(name)
// var name="John"

//var name
// console.log(name)
// name="John"

//Hoisting with let
// console.log(name) //TDZ(Temporal Dead Zone) ->Reference error
// let name="John"


//functions are fully hoisted
// greet()
// function greet(){
//     console.log("Hello")
// }


//arrow functions are not hoisted
greet()
const greet=()=>{
    console.log("Hello world")
}