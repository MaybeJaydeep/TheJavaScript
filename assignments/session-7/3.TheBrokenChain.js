/*

3. The Broken Chain

Promise is rejected, so (.then) and (catch) are skipped

*/

console.log("3.The Broken Chain:")
Promise.reject("Error Occurred")    //Error occured
    .then(() => console.log("Success")) //Skipped
    .catch((err) => console.log(err));  //Skipped