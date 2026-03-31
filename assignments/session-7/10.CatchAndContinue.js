Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

    /*

    Catch handles error and returns value, chain continues.
    reject -> .catch("Fail") -> return with "Recovered" -> .then("Recovered") -> "Recovered"

    */