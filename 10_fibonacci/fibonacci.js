const fibonacci = function(count) { //fibonacci(4) returns the 4th member of the series: 3  (1, 1, 2, 3)
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    const fibonacciArr = [];
    fibonacciArr[0] = 1;
    fibonacciArr[1] = 1;
    for (let i = 2; i <= count; i++) {
        fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
    }
    return fibonacciArr[count - 1];
};

// Do not edit below this line
module.exports = fibonacci;
