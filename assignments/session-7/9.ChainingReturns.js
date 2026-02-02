Promise.resolve(5)
    .then((val) => {
        console.log(val);   //5
        return val + 5;     //10
    })
    .then((val) => console.log(val)); //10

