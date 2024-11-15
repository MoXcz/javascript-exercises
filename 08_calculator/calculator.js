const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function (arr) {
  let result = arr.reduce((prod, current) => prod * current, 1);
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let c = 1;
  if (a > 0) c = a * factorial(a - 1);
  return c;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
