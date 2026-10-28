"use strict";

// Q7: Closure-based multiplier.
function makeMultiplier(multiplier) {
    // The returned function retains access to multiplier after this call returns.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(triple(5));      // 15
console.log(quadruple(5));   // 20

// Closure: each returned function remembers the multiplier from its own
// makeMultiplier call, even after that outer function has finished executing.
