let bonus = 5000;

function calculateSalary(isPermanent) {

    let salary = 40000;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
    console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Bonus outside the function: ₹${bonus}`);
