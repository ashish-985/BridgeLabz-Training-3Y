"use strict";

// Q5: Hoisting Lab - The Sequence Trap

// Original sequence, corrected so every read occurs after initialization.
// var declarations are hoisted and initialized to undefined, so reading score
// before its assignment logs undefined rather than throwing an error.
var score;
function announce() {
    console.log("Game started");
}
let status = "ready";

console.log(score); // undefined: var declaration is hoisted, assignment is not.
announce();         // Function declaration is available before its textual position.
score = 50;
console.log(`Score after assignment: ${score}`);

function startGame() {
    // status has been initialized before this function is called.
    console.log(status);
}
startGame();

// If console.log(status) were placed before the let status = "ready" line,
// it would throw ReferenceError due to the temporal dead zone (TDZ).

// Arrow-function comparison: arrow function expressions are not hoisted like
// function declarations. Call them only after their const binding is initialized.
const announceWithArrow = () => console.log("Game started (arrow function)");
announceWithArrow();
