const add = function(a, b) {
    return a + b;	
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((sum, currentValue) => sum + currentValue)
};

const multiply = function(arr) {
    return arr.reduce((sum, currentValue) => sum * currentValue);
};

const power = function(num, pow) {
    return Math.pow(num, pow);	
};

const factorial = function(num) {
    if (num > 0) {
        return factorial(num - 1) * num
    } else {
        return 1;
    }
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
