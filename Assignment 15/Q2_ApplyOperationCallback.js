"use strict";

// Q2: Apply an operation to each number using a callback.
function applyOperation(numbers, operation) {
    // map() calls the supplied callback once for each array element.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = applyOperation(numbers, (number) => number * 2);
const squaredNumbers = applyOperation(numbers, (number) => number * number);

console.log(`Original numbers: ${numbers}`);
console.log(`Doubled numbers: ${doubledNumbers}`);
console.log(`Squared numbers: ${squaredNumbers}`);
