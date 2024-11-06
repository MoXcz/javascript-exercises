const removeFromArray = function (arr, ...valueToRemove) {
  if (arr == undefined) return "ERROR";
  let j = 0;
  while (valueToRemove[j] != undefined) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === valueToRemove[j]) {
        arr.splice(i, 1);
        i = 0;
      }
    }
    j++;
  }
  return arr;
};

arr = removeFromArray([1, 2, 3, 4], 3, 2);
console.log(arr);

// Do not edit below this line
module.exports = removeFromArray;
