/*
Ex5.7 - shortest words
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function shortestWords(str) {
    if(str === ''){
        return 'Your string is empty!';
    }
    const arrStr = str.split(' ');
    var lengthShortestWord = str.length;
    for (word of arrStr){
        if(word.length < lengthShortestWord){
            lengthShortestWord = word.length;
        }
    }
    return lengthShortestWord;
}

console.log(shortestWords('vkdjvn vdfnvkdfn jn dvnd'));
console.log(shortestWords('vnj'));
console.log(shortestWords('vln--df jjjjjjjjjj p'));
console.log(shortestWords(''));