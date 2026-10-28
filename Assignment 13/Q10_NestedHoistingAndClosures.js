"use strict";

// Q10: Nested Hoisting and Closures
function outer() {
    // The local var count is hoisted to the top of outer() and starts as undefined.
    console.log(`Outer count before assignment: ${count}`);
    var count = 5;

    function inner() {
        // This var declaration creates a separate local binding that shadows
        // outer's count. It is hoisted within inner() and initially undefined.
        console.log(`Inner count before assignment: ${count}`);
        var count = 10;
        console.log(`Inner count after assignment: ${count}`);
    }

    inner();
    console.log(`Outer count after inner(): ${count}`);
}
outer();

// Expected output:
// Outer count before assignment: undefined
// Inner count before assignment: undefined
// Inner count after assignment: 10
// Outer count after inner(): 5

// Arrow-function comparison: changing inner to an arrow does not remove its
// own var scope. The inner arrow's local var still shadows outer count.
function outerWithArrow() {
    var count = 5;
    const innerArrow = () => {
        console.log(`Arrow inner count before assignment: ${count}`);
        var count = 10;
        console.log(`Arrow inner count after assignment: ${count}`);
    };

    innerArrow();
    console.log(`Arrow outer count: ${count}`);
}
outerWithArrow();

// Debug observation: break inside inner/innerArrow and inspect the Call Stack.
// Expected stack: inner (or innerArrow) -> outerWithArrow/outer -> script.
// Each function call has its own execution context and local variables.
