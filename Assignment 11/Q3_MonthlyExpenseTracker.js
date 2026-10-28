// Q3: Monthly Expense Tracker

// Monthly expenses for five categories, in rupees.
const expenses = {
    food: 4500,
    travel: 1800,
    rent: 9000,
    bills: 1200,
    leisure: 1500
};

let totalExpenses = 0;

// Add every category expense to the running total.
for (const category in expenses) {
    totalExpenses += expenses[category];
}

// Calculate the average across the five categories.
const categoryCount = Object.keys(expenses).length;
const averageExpense = totalExpenses / categoryCount;

// Add 10% tax using arithmetic and assignment operators.
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
let finalAmount = totalExpenses;
finalAmount += taxAmount;

console.log(`Total expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
