const sumAll = function (firstNum, secondNum) {
  let totalOfNum = 0;
  if (
    firstNum < 0 ||
    secondNum < 0 ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(secondNum)
  ) {
    return "ERROR";
  }
  if (firstNum > secondNum) {
    startNum = secondNum;
    endNum = firstNum;
  } else if (firstNum < secondNum) {
    startNum = firstNum;
    endNum = secondNum;
  }
  for (let i = startNum; i <= endNum; i++) {
    totalOfNum += i;
  }
  return totalOfNum;
};

// Do not edit below this line
module.exports = sumAll;
