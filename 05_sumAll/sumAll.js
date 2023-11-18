const sumAll = function(integer1, integer2) {
    let finalSum = 0;
    if (integer1 < 0 || integer2 < 0) return "ERROR";
    if (typeof integer1 !== "number" || typeof integer2 !== "number") return "ERROR";
    
    if (integer1 < integer2) {
        for(let i = integer1; i <= integer2; i++) {
            finalSum += i;
        }

        return finalSum;
    }
    else {
        for(let i = integer2; i <= integer1; i++) {
            finalSum += i;
        }

        return finalSum;
    }
}


// sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
