/*
Ex3.2 - People on the Bus
Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
items which represent number of people get into bus (The first item) and number of people get
off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after
the last array). Even though it is the last bus stop, the bus is not empty and some people are still
in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always
>= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

const arr1 = [[5,0],[6,5],[7,1],[2,2],[3,3]] // passing the test
const arr2 = [[5,1],[6,5],[7,1],[2,2],[3,3]] // does not pass the first test
const arr3 = [[5,0],[6,100],[7,1],[2,2],[3,3]] // does not pass the second test
const arr4 = [[5,5],[6,100],[7,1],[2,2],[3,3]] // does not pass both tests

function numStillInBus(arr) {
    var errorMsg = "";
    if (arr[0][1] !== 0) {
        errorMsg += "The bus is need to be empty in the first bus stop.";
    }
    var numInTheBuss = 0;
    for (let i = 0; i < arr.length; i++){
        numInTheBuss += arr[i][0];
        numInTheBuss -= arr[i][1];
        if (numInTheBuss < 0) {
            if (errorMsg) {
                errorMsg += "\n";
            }
            errorMsg += "Impossible values - the number of passengers on the bus is negative.";
            break;
        }
    }
    if (errorMsg) {
        return errorMsg
    } else {
        return numInTheBuss;
    }
}

console.log(numStillInBus(arr1));
console.log(numStillInBus(arr2));
console.log(numStillInBus(arr3));
console.log(numStillInBus(arr4));