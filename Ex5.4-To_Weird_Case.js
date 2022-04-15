/*
Ex5.4 - To Weird Case
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
string with all even indexed characters in each word upper cased, and all odd indexed
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(str) {
    if(!/^[a-zA-Z\s]+$/.test(str)){
        return "The passed in string will only consist of alphabetical characters and spaces";
    }
    const arrStr = str.split('');
    for (let i = 0; i < arrStr.length; i += 2) {
        arrStr[i] = arrStr[i].toUpperCase();
        if (arrStr[i + 1]) {
            arrStr[i + 1] = arrStr[i + 1].toLowerCase();
        }
    }
    str = arrStr.join('');
    return str;
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));