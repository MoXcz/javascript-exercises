const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .toLowerCase()
        .split(" ")
        .join("");
    newWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .toLowerCase()
        // Divide the string's characters into an indexed array, reverse
        // its order and join it into an array
        .split("").
        reverse().
        join("").
        // To divide the string spaces into an indexed array and join it
        // into the final array
        split(" ").
        join("");
    if (newWord === word) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
