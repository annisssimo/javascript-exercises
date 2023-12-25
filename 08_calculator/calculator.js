const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => (sum + value), 0)
};

const multiply = function(arr) {
	return arr.reduce((p, value) => (p * value), 1)
};

const power = function(value, degree) {
	return Math.pow(value, degree);
};

const factorial = function(value) {
  if (value === 0 || value === 1) { return 1;}
    let arr = [];
    for(let i = 1; i <= value; i++) {
    arr.push(i);
  }
  let res = arr.reduce((fact, element) => fact * element, 1)
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};