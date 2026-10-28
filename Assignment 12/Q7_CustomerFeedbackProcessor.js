const feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

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
