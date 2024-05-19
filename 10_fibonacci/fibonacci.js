const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let fib = [0];
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    for (let i = 0; i < 10; i++) {
        num3 = num1+num2;
        num2 = num3+num1;
        num1 = num3+num2;
        fib.push(num3, num2, num1);
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
