/*
Ex2.2 - One and Zero - Binary
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

function binaryToInteger(binaryArr) {
    if (Math.min(...binaryArr) < 0 || Math.max(...binaryArr) > 1 || binaryArr.some(x => x % 1 !== 0)) {
        console.log("only binary values pleas");
        return;
    }
    var intVal = 0;
    binaryArr.forEach((value, index) => {
        intVal += value * (2 ** (binaryArr.length - 1 - index));
    });
    return intVal;
}

console.log("1?", binaryToInteger([0, 0, 0, 1]));
console.log("2?", binaryToInteger([0, 0, 1, 0]));
console.log("5?", binaryToInteger([0, 1, 0, 1]));
console.log("9?", binaryToInteger([1, 0, 0, 1]));
console.log("2?", binaryToInteger([0, 0, 1, 0]));
console.log("6?", binaryToInteger([0, 1, 1, 0]));
console.log("15?", binaryToInteger([1, 1, 1, 1]));
console.log("11?", binaryToInteger([1, 0, 1, 1]));
// more checks
console.log("1?", binaryToInteger([1]));
console.log("362435?", binaryToInteger([1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1]));
console.log("undefined?", binaryToInteger([1, 3]));
console.log("undefined?", binaryToInteger([1, -3]));
console.log("undefined?", binaryToInteger([1, 0.5]));