"use strict";

// Q1: Callback Greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // Invoke the callback only after the greeting has been printed.
    callback();
}

greetUser("Ashish", showEndMessage);

// Flow: greetUser starts -> prints greeting -> invokes showEndMessage -> returns.
