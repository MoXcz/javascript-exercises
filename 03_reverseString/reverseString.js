const reverseString = function (string) {
  let stringToArray = string.split("");
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += stringToArray[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
