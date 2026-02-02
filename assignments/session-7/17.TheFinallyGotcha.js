Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));


/*

output:

Cleanup
Done

Explanation:
finally does not change result.

*/
