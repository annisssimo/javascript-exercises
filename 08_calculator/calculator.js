const add = function(summand1, summand2) {
	return summand1+summand2;
};

const subtract = function(reduced, deductible) {
	return reduced - deductible;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
return array.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(value, powNum) { //(2, 3) = 8
  return Math.pow(value, powNum);
};

const factorial = function(value) { //(4) = 1*2*3*4
	if (value === 0) return 1;
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result = result * i;
  }
  return result;
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
