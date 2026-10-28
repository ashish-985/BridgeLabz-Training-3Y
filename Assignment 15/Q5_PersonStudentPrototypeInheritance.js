"use strict";

// Q5: Person -> Student inheritance using constructor functions.
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Initialize the inherited name property on this Student instance.
    Person.call(this, name);
    this.branch = branch;
}

// Link Student.prototype to Person.prototype, then restore constructor.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Ashish", "CSE");
student.showName();
student.showBranch();
console.log(`Student inherits Person method: ${student instanceof Person}`);
