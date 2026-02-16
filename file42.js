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

f1()
    .then(() => {
        f2();
    })
    .catch((err) => {
        console.log("Error ")
    });
