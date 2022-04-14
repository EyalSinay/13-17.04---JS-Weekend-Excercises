/*
Ex2.1 - Sum of lowest numbers
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function SumOfLowestNumbers(arr) {
    const filterArr = arr.filter(x => x > 0 && x % 1 === 0)
    if (filterArr.length < 4) {
        return "There must be at least 4 positive variables";
    }
    let minArr = [filterArr[0], filterArr[1]];
    for (let i = 2; i < filterArr.length; i++) {
        if (minArr[0] >= minArr[1]) {
            if (minArr[0] > filterArr[i]) {
                minArr[0] = filterArr[i];
            } else
            if (minArr[1] > filterArr[i])
                minArr[1] = filterArr[i];
        } else {
            if (minArr[1] > filterArr[i]) {
                minArr[1] = filterArr[i];
            } else
            if (minArr[0] > filterArr[i])
                minArr[0] = filterArr[i];
        }
    }
    return minArr[0] + minArr[1];
}

// console.log(SumOfLowestNumbers([19, 5]));
// console.log(SumOfLowestNumbers([19.5, 5.9, 42, 2, 77]));
// console.log(SumOfLowestNumbers([19, 5, 42, 2, 77]));
// console.log(SumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));
// console.log(SumOfLowestNumbers([20, 20, 3, 3, 50, 6]));