"use strict";

// Q9: JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanEntries = [];
const auditErrors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    const rawEntry = rawData[index];
    debugger; // Watch lineNumber, rawEntry, parsedEntry, and auditErrors.

    try {
        const parsedEntry = JSON.parse(rawEntry);

        if (parsedEntry.user === undefined || parsedEntry.age === undefined) {
            throw new Error("Missing required key: user or age.");
        }

        const numericAge = Number(parsedEntry.age);
        if (!Number.isFinite(numericAge) || numericAge < 0) {
            throw new Error("Age must be a valid non-negative number.");
        }

        const cleanEntry = { ...parsedEntry, age: numericAge };
        cleanEntries.push(cleanEntry);

        if (numericAge < 18) {
            under18Users.push(cleanEntry);
        }
        console.log(`Line ${lineNumber}: valid JSON record for ${cleanEntry.user}`);
    } catch (error) {
        const category = error instanceof SyntaxError ? "Invalid JSON" : "Data validation error";
        auditErrors.push({ lineNumber, category, message: error.message });
        console.log(`Line ${lineNumber}: ${category} - ${error.message}`);
    }
}

console.log("Clean entries:");
for (const entry of cleanEntries) console.log(JSON.stringify(entry));
console.log("Audit errors:");
for (const entry of auditErrors) console.log(JSON.stringify(entry));
console.log("Users under 18:");
for (const entry of under18Users) console.log(JSON.stringify(entry));
console.log(`Valid: ${cleanEntries.length}; Errors: ${auditErrors.length}; Under 18: ${under18Users.length}`);
