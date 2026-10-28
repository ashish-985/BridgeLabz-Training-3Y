"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) throw new RangeError("Cannot divide by zero.");
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) throw new RangeError("Cannot calculate the real square root of a negative number.");
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`Operation: ${operation} | Inputs: ${num1}, ${num2} | Result: ${result}`);
    } catch (error) {
        console.log(`Operation: ${operation} | Inputs: ${num1}, ${num2} | ${error.name}: ${error.message}`);
    }
}

for (const [operation, first, second] of [["root", -9, 0], ["multiply", 4, 5]]) {
    try {
        console.log(`Result: ${calculate(operation, first, second)}`);
    } catch (error) {
        console.log(`Edge case: ${error.name}: ${error.message}`);
    }
}
