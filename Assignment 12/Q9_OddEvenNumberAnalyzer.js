// Q9: Odd–Even Number Analyzer

const numbers = [];
const classifications = [];

// Fill an array with every integer from 1 through 30.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number in the required priority order.
for (const number of numbers) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    classifications.push({ Number: number, Result: classification });
}

// Show the results stored in the new array.
console.table(classifications);
