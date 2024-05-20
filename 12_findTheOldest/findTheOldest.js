const findTheOldest = function(arr) {
    // Assigns as 'year of death' the current date, this helps know who the
    // oldest person is
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i].yearOfDeath = new Date().getFullYear();
        }
    }

    let newArr = [];
    // The array saves all the ages of the persons by substracting their year
    // of birth to their year of death
    newArr = arr.map((person) => (person.yearOfDeath - person.yearOfBirth))
    let max = 0;
    let position = 0;
    // It returns 'position' which will be the position in 'arr' to hold the
    // oldest person
    for (let i = 0; i < arr.length; i++) {
       if (max < newArr[i]) {
            max = newArr[i];
            position = i;
       } 
    }
    return arr[position];
};

// Do not edit below this line
module.exports = findTheOldest;
