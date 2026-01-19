/*
const user = {
  name: "Alex",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};
user.greet();
*/

/*Why it fails?

* Arrow functions do NOT have their own this

* this is taken from outer scope → not the object

* So this.name = undefined

*/

const user = {
  name: "Alex",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

user.greet();