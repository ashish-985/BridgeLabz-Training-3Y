"use strict";

function makeMultiplier(multiplier) {

    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(triple(5));
console.log(quadruple(5));
