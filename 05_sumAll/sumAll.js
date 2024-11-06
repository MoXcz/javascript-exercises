const sumAll = function (start, end) {
  let sum = 0;
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  )
    return "ERROR";
  if (start < end) {
    for (let i = 1; i <= end; i++) {
      sum += i;
    }
  } else if (start > end) {
    for (let i = start; i > 0; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
