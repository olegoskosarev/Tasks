const urls = [
    'user.json',
    'guest.json'
];

const results = [];

let chain = Promise.resolve();

urls.forEach((url) => {
    chain = chain
        .then(() => {
            alert(url);
            return url;
        })
        .then(result => {
            results.push(result);
        });
});

chain.then(() => {
    alert("Done");
});