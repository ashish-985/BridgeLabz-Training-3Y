const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const labelledScores = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

const passedScores = scores.filter((score) => score >= 50);

console.table(labelledScores);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedScores.length} of ${scores.length}`);
