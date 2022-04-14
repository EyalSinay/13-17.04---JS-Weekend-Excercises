/*
Ex2.4 - Unique
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

function findUniq(arr) {
    var unusual;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            if (i !== 0) {
                unusual = arr[i + 1];
                return unusual;
            } else {
                if (arr[i] === arr[i + 2]) {
                    unusual = arr[i + 1];
                    return unusual;
                } else {
                    unusual = arr[i];
                    return unusual;
                }
            }
        }
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]) === 2);
console.log(findUniq([0, 0, 0.55, 0, 0]) === 0.55);