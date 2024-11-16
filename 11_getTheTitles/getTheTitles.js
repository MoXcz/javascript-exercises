const getTheTitles = function (obj) {
  let arr = [];
  obj.forEach((book) => arr.push(book.title));
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
