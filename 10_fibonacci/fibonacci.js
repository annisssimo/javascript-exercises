const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    if (number === 1 || number === 2) return 1;

    let fibonacciArr = [1, 1];

    for (let i = 2; i < number; i++) {
        fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    }

    return fibonacciArr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;