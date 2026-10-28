// Q8: Employee Salary Projection

let currentSalary = 40000; // Starting monthly salary in rupees.
const annualIncrementRate = 8; // Annual increment percentage.
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Apply the yearly increment to the current salary.
    currentSalary *= 1 + annualIncrementRate / 100;

    salaryProjection.push({
        Year: year,
        "Annual Increment": `${annualIncrementRate}%`,
        "Projected Monthly Salary (₹)": Math.round(currentSalary)
    });
}

// Display all five years in a formatted table.
console.table(salaryProjection);
