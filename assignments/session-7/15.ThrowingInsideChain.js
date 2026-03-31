Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

    /*

    output:
    
    Caught Error
    10

    Throw → caught → return 10 → next then runs.

    */