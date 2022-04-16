/*
Ex5.5 - Abbreviate two words
Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F6.6
*/

function AbbreviateTwoWords(str) {
    const arrStr = str.split(' ');
    if (!/^[a-zA-Z\s]+$/.test(str) || arrStr.length !== 2) {
        return "The passed in string will only consist of alphabetical characters of two words and one space in between them.";
    }

    var firsChar = arrStr[0].slice(0, 1);
    var secondChar = arrStr[1].slice(0, 1);
    var newStr = firsChar + "." + secondChar;
    newStr = newStr.toUpperCase();
    return newStr;
}

console.log(AbbreviateTwoWords('eyal sinay'));
console.log(AbbreviateTwoWords('eyalsinay'));
console.log(AbbreviateTwoWords('eyal-sinay'));