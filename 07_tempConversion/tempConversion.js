const convertToCelsius = function(fahrenheit) {
  const convertedToCelsius = (fahrenheit - 32)*5/9;
  return Number(convertedToCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const convertedToFahrenheit = celsius*9/5 + 32;
  return Number(convertedToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
