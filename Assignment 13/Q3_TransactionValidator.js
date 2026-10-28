"use strict";

// Q3: Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Custom error class makes each validation failure easy to categorize.
class TransactionValidationError extends Error {
    constructor(category, message) {
        super(message);
        this.name = "TransactionValidationError";
        this.category = category;
    }
}

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    let currentState = "starting validation";
    debugger; // Set a breakpoint here and watch index, transaction, and currentState.

    try {
        currentState = "checking null entry";
        if (transaction === null) {
            throw new TransactionValidationError("null", "Transaction entry is null.");
        }

        currentState = "checking required properties";
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionValidationError("missing-field", "Transaction must include both id and amount.");
        }

        currentState = "checking amount";
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            throw new TransactionValidationError("invalid-amount", "Amount must be a finite number.");
        }
        if (transaction.amount < 0) {
            throw new TransactionValidationError("negative-amount", "Amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        const category = error instanceof TransactionValidationError ? error.category : "unexpected-error";
        invalidTransactions.push({
            index,
            category,
            message: error.message,
            transaction
        });
        console.log(`Transaction at index ${index}: INVALID [${category}] - ${error.message}`);
    }
}

console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
console.log("Valid transaction records:");
for (const transaction of validTransactions) console.log(JSON.stringify(transaction));
console.log("Invalid transaction records:");
for (const entry of invalidTransactions) console.log(JSON.stringify(entry));
