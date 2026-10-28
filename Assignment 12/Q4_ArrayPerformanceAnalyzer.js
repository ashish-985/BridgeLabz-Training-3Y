// Q4: Array Performance Analyzer

// Generate eight random integer scores between 30 and 100 inclusive.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to create a labelled list of student scores.
const labelledScores = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

// Use spread with Math.max/min to find the highest and lowest scores.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Use reduce() to calculate the sum and average.
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed.
const passedScores = scores.filter((score) => score >= 50);

console.table(labelledScores);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedScores.length} of ${scores.length}`);
