/*
Ex6.1 - Mumbling
This time no story, no theory. The examples below show you how to write function
accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(str) {
    if(!/^[a-zA-Z\s]+$/.test(str)){
        return "The parameter of accum is a string which includes only letters from a..z and A..Z.";
    }
    const arrStr = str.split('');
    const newArrStr = arrStr.map((char, index) => {
        let multiChar = char.toUpperCase();
        for (var i = 1; i < index+1; i++){
            multiChar += char;
        }
        if (index !== arrStr.length - 1){
            multiChar += '-';
        }
        return multiChar;
    });
    var newStr = newArrStr.join('');
    return newStr;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));