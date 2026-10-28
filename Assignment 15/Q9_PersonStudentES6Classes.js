"use strict";

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

