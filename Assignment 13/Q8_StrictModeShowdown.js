"use strict";

// Q8: Strict Mode Showdown
// The exact invalid example cannot run in this strict-mode file because duplicate
// parameter names cause a SyntaxError during parsing:
//
// function demo(a, a) { total = 10; delete total; }
//
// In a non-strict ordinary function, duplicate parameter names are allowed.
// Assigning total = 10 without declaring total can create an accidental global.
// In strict mode, that undeclared assignment would throw ReferenceError.
// The unqualified delete total statement is permitted in sloppy mode in some
// contexts, but it is a SyntaxError in strict mode. It should not be used to
// remove a variable binding.
//
// Correct ES6-style version: unique parameters and explicit local declarations.
function demo(firstValue, secondValue) {
    const total = 10;
    console.log(`First: ${firstValue}, Second: ${secondValue}, Total: ${total}`);
    return total;
}

console.log(`Returned total: ${demo(5, 10)}`);

// To compare modes, use a separate non-strict .js file for the original example.
// Do not add "use strict" to that comparison file.
// Debug observation: set a breakpoint inside demo and inspect its local scope.
