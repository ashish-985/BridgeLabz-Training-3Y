"use strict";

// Q3: Arrow-function this versus normal-function this.
const user = {
    name: "Ashish",
    showName: () => {
        // Arrow functions do not create their own this; they capture it lexically.
        // In this top-level context, this.name is typically undefined in Node.js.
        console.log(`Arrow function this.name: ${this.name}`);
    }
};

user.showName();

// Fix: a normal method gets this from the object used to call it.
user.showName = function () {
    console.log(`Normal function this.name: ${this.name}`);
};

user.showName();
