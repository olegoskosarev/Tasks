const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Time is over"));
    }, 3000);
});

promise.then(
    result => {
        alert("Fulfilled: " + result);
    },
    error => {
        alert("Rejected: " + error.message);
    }
);