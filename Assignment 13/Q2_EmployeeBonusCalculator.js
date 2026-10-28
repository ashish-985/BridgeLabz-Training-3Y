"use strict";

// Q2: Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        // Validate required properties before converting their string values.
        if (!employee || typeof employee.name !== "string" ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee name, salary, or years property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);
        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new TypeError("Salary and years must be valid non-negative numbers.");
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalPay = salary + bonus;

        console.log(`Employee: ${employee.name} | Salary: ₹${salary.toFixed(2)} | Experience: ${years} years | Bonus: ₹${bonus.toFixed(2)} | Total: ₹${totalPay.toFixed(2)}`);
    } catch (error) {
        console.log(`Could not process employee record: ${error.message}`);
    }
}

// Strict mode prevents accidental assignment to undeclared identifiers.
// All variables above are explicitly declared with const.
