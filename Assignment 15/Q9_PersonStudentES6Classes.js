"use strict";

// Q9: Person -> Student inheritance using ES6 classes.
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the parent constructor before using this.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new Student("Ashish", "CSE");
classStudent.showName();
classStudent.showBranch();

// Equivalent constructor/prototype version for comparison.
function PrototypePerson(name) {
    this.name = name;
}
PrototypePerson.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
    PrototypePerson.call(this, name);
    this.branch = branch;
}
PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;
PrototypeStudent.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new PrototypeStudent("Ashish", "CSE");
prototypeStudent.showName();
prototypeStudent.showBranch();

// Both versions print the same name and branch. ES6 classes provide cleaner syntax.
