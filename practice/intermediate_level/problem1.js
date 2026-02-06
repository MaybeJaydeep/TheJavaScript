console.log(a);    //no hoisting of var

var a = 10;

if (true) {
  let a = 20;
  console.log(a);  //20 becz a is redefined as let inside if {}
}

console.log(a);    //10 as var is global scoped


/*

Output:

undefined
20
10

Explanaton:

var -> function scoped -> doesnt have hoisting property 

let 

*/
