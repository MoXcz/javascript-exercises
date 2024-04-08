const convertToCelsius = function (fahrenheit) {
  return Number(((fahrenheit - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (celisus) {
  return Number(((9 / 5) * celisus + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
