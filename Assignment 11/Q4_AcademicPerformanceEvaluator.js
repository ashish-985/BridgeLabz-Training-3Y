// Q4: Academic Performance Evaluator

// Marks for five subjects; each subject is marked out of 100.
const subjectMarks = [88, 91, 79, 85, 90];
const totalSubjects = subjectMarks.length;
const maximumMarks = totalSubjects * 100;

// Calculate total marks, average marks, and overall percentage.
const totalMarks = subjectMarks.reduce((sum, marks) => sum + marks, 0);
const averageMarks = totalMarks / totalSubjects;
const percentage = (totalMarks / maximumMarks) * 100;

// A score below 35 in any subject means the student is detained.
const hasFailedSubject = subjectMarks.some((marks) => marks < 35);
let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85 && !hasFailedSubject) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Total marks: ${totalMarks}/${maximumMarks}`);
console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
