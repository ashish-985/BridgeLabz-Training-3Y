"use strict";

const requestedRowsInput = 5;
const rowLimit = Number.isInteger(requestedRowsInput) && requestedRowsInput > 0
    ? requestedRowsInput
    : 5;

for (let row = 1; row <= rowLimit; row++) {
    let patternRow = "";
    for (let column = 1; column <= row; column++) {
        patternRow += "* ";
    }
    console.log(patternRow.trimEnd());
}
