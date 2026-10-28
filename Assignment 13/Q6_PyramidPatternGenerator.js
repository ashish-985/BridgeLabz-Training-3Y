"use strict";

// Q6: Pyramid Pattern Generator
const requestedRowsInput = 5; // Change this value to simulate user input.
const rowLimit = Number.isInteger(requestedRowsInput) && requestedRowsInput > 0
    ? requestedRowsInput
    : 5;

// Build each row using a loop; the inner loop creates the stars for that row.
for (let row = 1; row <= rowLimit; row++) {
    let patternRow = "";
    for (let column = 1; column <= row; column++) {
        patternRow += "* ";
    }
    console.log(patternRow.trimEnd());
}

// Debug observations:
// Put a breakpoint on the outer loop and watch row, column, and patternRow.
// With let, each loop iteration has block-scoped bindings.
// Replacing let with var makes row and column function-scoped (or global-scoped
// at top level), so their final values remain accessible after the loops.
// Strict mode catches undeclared variables such as "for (i = 0; ...)".
// The loops above use let and declare every variable explicitly.
