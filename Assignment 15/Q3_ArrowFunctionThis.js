"use strict";

const user = {
    name: "Ashish",
    showName: () => {

        console.log(`Arrow function this.name: ${this?.name}`);
    }
};

user.showName();

user.showName = function () {
    console.log(`Normal function this.name: ${this.name}`);
};

user.showName();
