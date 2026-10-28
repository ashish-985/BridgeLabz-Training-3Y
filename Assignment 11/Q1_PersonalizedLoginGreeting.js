// Q1: Personalized Login Greeting

// Store the user's name.
const userName = "Ashish";

// Get the current hour in 24-hour format (0-23).
const currentHour = new Date().getHours();

let greeting;

// Choose a greeting based on the current time.
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
