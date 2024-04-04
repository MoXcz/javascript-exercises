const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let sumOfStrings = "";
    for (let i = 0; i < num; i++) {
      sumOfStrings += string;
    }
    return sumOfStrings;
  }
};

// Do not edit below this line
module.exports = repeatString;
