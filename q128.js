//Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Arrow function that calculates the product of all its parameters
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 5)); // Outputs: 30
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
