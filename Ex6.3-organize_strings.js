/*
Ex6.3 - organize strings
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
*/

function longest(str1, str2){
    const joinStr = str1 + str2;
    if(!/^[a-zA-Z\s]+$/.test(joinStr)){
        return "The passed in string will only consist of alphabetical characters and spaces";
    }
    const joinStrArr = joinStr.split('');
    const uniqueArray = joinStrArr.filter((char, index) => {
        return joinStrArr.indexOf(char) == index;
    });
    return uniqueArray.sort().join('');
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") === "abcdefklmopqwxy");
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));