let currentSalary = 40000;
const annualIncrementRate = 8;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {

    currentSalary *= 1 + annualIncrementRate / 100;

    salaryProjection.push({
        Year: year,
        "Annual Increment": `${annualIncrementRate}%`,
        "Projected Monthly Salary (₹)": Math.round(currentSalary)
    });
}

console.table(salaryProjection);
