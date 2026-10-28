// Q2: Multi-Type Data Summary

// Example database entries using different JavaScript data types.
const userName = "Ashish";
const userAge = 21;
const isStudent = true;
const favoriteSubjects = ["JavaScript", "Java", "DSA"];
const userProfile = { city: "Meerut", course: "B.Tech CSE" };
const middleName = null;
let alternateEmail;

// Build a report that includes each value and its type.
// Array.isArray() is needed because typeof [] returns "object".
const dataSummary = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Favorite Subjects",
        Value: favoriteSubjects.join(", "),
        Type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects
    },
    { Label: "User Profile", Value: JSON.stringify(userProfile), Type: typeof userProfile },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Alternate Email", Value: alternateEmail, Type: typeof alternateEmail }
];

// Print the complete report in one table statement.
console.table(dataSummary);
