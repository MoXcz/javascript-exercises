const findTheOldest = function (arr) {
  let oldestPerson = 0;
  let oldestPersonAge = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].yearOfDeath) arr[i].yearOfDeath = new Date().getFullYear();
    if (i == 0) oldestPersonAge = 0;
    else oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    if (oldestPersonAge < arr[i].yearOfDeath - arr[i].yearOfBirth) {
      oldestPerson = arr[i];
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
