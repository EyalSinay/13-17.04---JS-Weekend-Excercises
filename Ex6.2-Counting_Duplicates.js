/*
Ex6.2 - Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function countingDuplicates(str) {
    str = str.toLowerCase();
    const arrStr = str.split('');
    const objStr = {};
    for (let i = 0; i < arrStr.length; i++){
        if (!objStr[arrStr[i]]){
            objStr[arrStr[i]] = 1;
        } else {
            objStr[arrStr[i]]++;
        }
    }
    const valuesObj = Object.values(objStr);
    const keysObj = Object.keys(objStr);
    var outPut = '';
    if (!valuesObj.some(x => x > 1)){
        return "0 # no characters repeats more than once";
    } else {
        for (let i = 0; i < valuesObj.length; i++){
            if (valuesObj[i] > 1) {
                outPut += `${keysObj[i]} # ${valuesObj[i]}\n`
            }
        }
        return outPut;
    }

}

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));