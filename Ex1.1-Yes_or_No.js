/*
Ex1.1 - Yes or No
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false.
*/
function yesOrNo(BooleanValue) {
    if (typeof BooleanValue !== "boolean") {
        return `the type of the value must be boolean`;
    }
    return BooleanValue ? "Yes" : "No";
}

console.log(yesOrNo(true));
console.log(yesOrNo(false));
console.log(yesOrNo(1<2));
console.log(yesOrNo(1>2));
console.log(yesOrNo(""));
console.log(yesOrNo(0));