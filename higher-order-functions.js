// Higher Order Functions Example:

// Our copyArrayAndManipulate is a long form way of creating the .map() function

// This is the higher order function:
function copyArrayAndManipulate(array, instructions) {
    const output = [];

    for(let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }

    return output;
}

// These are the callback functions that can be passed in to the higher order function to change how the array is manipulated
function multiplyBy2(input) { return input * 2; }
// Can use arrow functions here
const times3 = input => input*3;
function divideBy2(input) { return input / 2; }
function add2(input) { return input + 2; }
function subtract2(input) { return input - 2; }

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// Can pass a whole arrow function as a parameter into a function call
const arrowResult = copyArrayAndManipulate([3, 4, 5], input => input*3);