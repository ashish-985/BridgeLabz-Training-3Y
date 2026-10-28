"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

// Number() converts each entry for numeric validation; Boolean() and String()
// are also shown so the different type conversions can be compared.
for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numericValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    // NaN results (including undefined, "NaN", and "100px") are invalid.
    // Whitespace-only strings are rejected explicitly because Number(" ") is 0.
    const isWhitespaceOnly = typeof originalValue === "string" && originalValue.trim() === "";
    const isValidNumber = !Number.isNaN(numericValue) && !isWhitespaceOnly;

    const report = {
        index,
        original: String(originalValue),
        numberForm: Number.isNaN(numericValue) ? "NaN (invalid)" : numericValue,
        booleanForm: booleanValue,
        stringForm: stringValue
    };

    if (isValidNumber) {
        validNumericData.push({ originalValue, numericValue });
        console.log(`VALID  | index=${index} | ${JSON.stringify(report)}`);
    } else {
        invalidNumericData.push({ originalValue, reason: isWhitespaceOnly ? "Whitespace-only string" : "Number conversion produced NaN" });
        console.log(`INVALID | index=${index} | ${JSON.stringify(report)}`);
    }
}

console.log("\nValid numeric entries:");
for (const entry of validNumericData) {
    console.log(`Original: ${String(entry.originalValue)} => Number: ${entry.numericValue}`);
}
console.log("\nInvalid entries:");
for (const entry of invalidNumericData) {
    console.log(`Value: ${String(entry.originalValue)} | Reason: ${entry.reason}`);
}
console.log(`Valid count: ${validNumericData.length}; Invalid count: ${invalidNumericData.length}`);
