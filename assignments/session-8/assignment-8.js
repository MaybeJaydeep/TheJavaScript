/*
Exercise 3: setTimeout with Clear


Task: Create a countdown timer that counts from 10 to 0, then stops.



TODO: Implement countdown function

*/

function countdown(start) {

var count = start;
var i= 0;
const id = setInterval(() => {
    if(count === 0)
    {
        clearInterval(id);
    }
    console.log(count + "(after " + i + " seconds)");
    count--;
    i++;
},1000)
}

countdown(10);

/*
Output:
10(after 0 seconds)
9(after 1 seconds)
8(after 2 seconds)
7(after 3 seconds)
6(after 4 seconds)
5(after 5 seconds)
4(after 6 seconds)
3(after 7 seconds)
2(after 8 seconds)
1(after 9 seconds)
0(after 10 seconds)
*/