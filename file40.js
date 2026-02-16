// function f1(){
//     setTimeout(()=>{
//         console.log("Hello")
//     },5000)
// }
// function f2(){
//     console.log("This is second function")
// }
// f1()
// f2()



function makePayment(){
    setTimeout(()=>{
        console.log("Payment has been processed")
    },5000)
}
function setConfirmation(){
    console.log("Order has been placed successfully")
}
makePayment()
setConfirmation()