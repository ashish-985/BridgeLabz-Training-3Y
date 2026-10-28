// Q1: Scope Conflict Resolver

// Global bonus is shared across function calls.
let bonus = 5000;

function calculateSalary(isPermanent) {
    // salary is local to calculateSalary().
    let salary = 40000;

    // Add the global bonus only when this employee is permanent.
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
    console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary(true);
calculateSalary(false);

// Changing the local argument does not change the global bonus variable.
console.log(`Bonus outside the function: ₹${bonus}`);
