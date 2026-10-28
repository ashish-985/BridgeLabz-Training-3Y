"use strict";

// Q8: Strict Mode Showdown
// The exact invalid example cannot be executed in this strict-mode file because
// duplicate parameter names are a SyntaxError during parsing, before any code runs:
//
// function demo(a, a) { total = 10; delete total; }
//
// In sloppy mode, duplicate parameters are allowed in ordinary functions and
// assigning total = 10 can create an accidental global. Deleting an unqualified
// identifier is not valid syntax in either mode; delete total is a SyntaxError.
// In strict mode, assigning to an undeclared identifier is a ReferenceError.
//
// Correct ES6-style version: unique parameters and explicit local declarations.
function demo(firstValue, secondValue) {
    const total = 10;
    console.log(`First: ${firstValue}, Second: ${secondValue}, Total: ${total}`);
    return total;
}

console.log(`Returned total: ${demo(5, 10)}`);

// To compare modes safely, place the sloppy-mode demonstration in a separate
// non-strict .js file. Do not add "use strict" to that comparison file.
// Debug observation: set a breakpoint inside demo and inspect its local scope.
