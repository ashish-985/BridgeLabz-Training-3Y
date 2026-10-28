// Q6: Event-Based Counter Simulation

let count = 0;

// This nested function can access and read the count variable from its outer scope.
function showCount() {
    console.log(`Current count: ${count}`);
}

function increment() {
    count++;
    showCount();
}

function decrement() {
    count--;
    showCount();
}

// Simulate button clicks by calling the functions.
increment();
increment();
decrement();
