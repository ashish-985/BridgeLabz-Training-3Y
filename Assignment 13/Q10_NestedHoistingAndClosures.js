"use strict";

function outer() {

    console.log(`Outer count before assignment: ${count}`);
    var count = 5;

    function inner() {

        console.log(`Inner count before assignment: ${count}`);
        var count = 10;
        console.log(`Inner count after assignment: ${count}`);
    }

    inner();
    console.log(`Outer count after inner(): ${count}`);
}
outer();

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
