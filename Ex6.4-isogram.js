/*
Ex6.4 - isogram
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
    str = str.toLowerCase();
    if(!/^[a-z]+$/.test(str)){
        return "The passed in string will only one word consist of alphabetical characters";
    }
    const arrStr = str.split('');
    const uniqueArray = arrStr.filter((char, index) => {
        return arrStr.indexOf(char) == index;
    });
    if (arrStr.length === uniqueArray.length){
        return true;
    } else {
        return false;
    }
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));