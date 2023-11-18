const reverseString = function(string) {
    let arrayOfLetters;
    let newString = "";
    arrayOfLetters = string.split("");
    for (let i = arrayOfLetters.length - 1; i >= 0; i--) {
        newString += arrayOfLetters[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
