"use strict";

var score;
function announce() {
    console.log("Game started");
}
let status = "ready";

console.log(score);
announce();
score = 50;
console.log(`Score after assignment: ${score}`);

function startGame() {

    console.log(status);
}
startGame();

const announceWithArrow = () => console.log("Game started (arrow function)");
announceWithArrow();
