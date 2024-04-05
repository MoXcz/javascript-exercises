const removeFromArray = function (array) {
  let newArray = [];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (
      array[i] !== arguments[1] &&
      array[i] !== arguments[2] &&
      array[i] !== arguments[3] &&
      array[i] !== arguments[4]
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
