const fibonacci = function (fibonacciNumber) {
  if (fibonacciNumber == 0) return 0;
  if (fibonacciNumber < 0) return "OOPS"
  let curr = 0,
    prev = 0,
    next = 1;
  for (let i = 1; i < +fibonacciNumber; i++) {
    prev = curr;
    curr = next;
    next = prev + curr;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
