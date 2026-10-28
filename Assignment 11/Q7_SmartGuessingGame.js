const secretNumber = Math.floor(Math.random() * 50) + 1;

const userGuess = 24;

if (userGuess < 1 || userGuess > 50) {
    console.log("Guess must be between 1 and 50.");
} else if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {

    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else if (userGuess < secretNumber) {
        console.log("Too low");
    }
}

console.log(`Secret number (for testing): ${secretNumber}`);
