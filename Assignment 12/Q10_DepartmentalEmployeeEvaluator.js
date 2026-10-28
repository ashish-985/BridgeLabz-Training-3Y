// Q10: Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

const evaluationReport = [];

// Use a loop and nested if-else statements to evaluate each department's score.
for (const department of departments) {
    const departmentName = department[0];
    const performanceScore = department[1];
    let performanceRating;

    if (performanceScore >= 90) {
        performanceRating = "Excellent";
    } else {
        if (performanceScore >= 75) {
            performanceRating = "Good";
        } else {
            if (performanceScore >= 60) {
                performanceRating = "Average";
            } else {
                performanceRating = "Needs Improvement";
            }
        }
    }

    evaluationReport.push({
        Department: departmentName,
        Score: performanceScore,
        Rating: performanceRating
    });
}

console.table(evaluationReport);
