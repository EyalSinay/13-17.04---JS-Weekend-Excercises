/*
Ex5.3 - To Camel Case
Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
    const splitStrArr = str.split('');
    for (let i = 0; i < splitStrArr.length; i++){
        if (splitStrArr[i] === "-" || splitStrArr[i] === "_") {
            splitStrArr[i+1] = splitStrArr[i+1].toUpperCase();
        }
    }
    const newArr = splitStrArr.filter(char => char !== "-" && char !== "_");
    var newStr = "";
    for (char of newArr){
        newStr += char;
    }
    return newStr;
}

console.log(toCamelCase("my-name_is-eyal_sinay"));