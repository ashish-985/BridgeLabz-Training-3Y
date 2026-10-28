// Q2: String Manipulation Report

const productName = " wireless headphones PRO ";

// Remove extra spaces and convert the title to lowercase first.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of every word using split(), map(), and join().
const titleCaseName = trimmedName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with the requested product edition wording.
const cleanedTitle = titleCaseName.replace(/pro/gi, "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
