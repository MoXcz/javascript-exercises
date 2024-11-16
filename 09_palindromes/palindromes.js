const palindromes = function (string) {
  let inOrder = string
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .split("");
  let rev = string
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .split("")
    .reverse();
  if (rev.join("") != inOrder.join("")) {
    return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
