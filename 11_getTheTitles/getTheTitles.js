const getTheTitles = function(arr) {
    let booksArr = [];
    for (let i = 0; i < arr.length; i++) {
        booksArr.push(arr[i].title);
    }
    return booksArr;
};

// Do not edit below this line
module.exports = getTheTitles;
