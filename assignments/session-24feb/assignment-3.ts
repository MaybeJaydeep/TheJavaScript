/*
Assignment-3
Create overloads for a function format that:
Accepts number → returns string
Accepts Date → returns string

*/

function format(value:number):string
function format(value:Date):string

function format(value: number | Date):string{
    if(typeof value === "number") return value.toString();
    
    return value.toDateString()
}

console.log(format(20));
console.log(format(new Date()));