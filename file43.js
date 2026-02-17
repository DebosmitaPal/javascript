function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("This is function f1")
            resolve();
        }, 5000)
    });
}

function f2() {
    console.log("This is function f2")
}

async function main(){
    await f1()   //This shows f2 will run after f1
    f2()
}
main()
