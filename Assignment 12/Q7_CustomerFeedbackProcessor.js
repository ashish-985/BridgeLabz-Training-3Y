// Q7: Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split on whitespace and remove empty entries before counting words.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative keywords without case sensitivity.
const lowerCaseFeedback = feedback.toLowerCase();
const containsNegativeFeedback =
    lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

if (!containsNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log(`Word count: ${wordCount}`);
console.log(`Feedback: ${feedback}`);
