const subjectMarks = [88, 91, 79, 85, 90];
const totalSubjects = subjectMarks.length;
const maximumMarks = totalSubjects * 100;

const totalMarks = subjectMarks.reduce((sum, marks) => sum + marks, 0);
const averageMarks = totalMarks / totalSubjects;
const percentage = (totalMarks / maximumMarks) * 100;

const hasFailedSubject = subjectMarks.some((marks) => marks < 35);
let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}

console.log(`Total marks: ${totalMarks}/${maximumMarks}`);
console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
