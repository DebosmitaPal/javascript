function f1(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x%2==0){
            resolve(`The number is ${x}`); 
            }
            else{
                reject("The number is odd")
            }
        }, 5000)
    });
}
async function main(){
    let num=Math.round(Math.random()*10)
    try {
        const result=await f1(num);
        console.log(result);
        console.log("Program completed successfully");
    } catch (err) {
        console.log(err);
    }
}
main()
