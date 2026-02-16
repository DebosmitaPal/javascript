function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment has been processed")
            resolve();
        }, 5000)
    });
}

function setConfirmation() {
    console.log("Order has been placed successfully")
}

makePayment()
    .then(() => {
        setConfirmation();
    })
    .catch((err) => {
        console.log("Error processing payment")
    });
