const palindromes = function (inputString) {
    const processedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    return processedString.split("").reverse().join("") === processedString;
};

// Do not edit below this line
module.exports = palindromes;
