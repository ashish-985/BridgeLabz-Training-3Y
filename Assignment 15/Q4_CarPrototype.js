"use strict";

// Q4: Constructor function and shared prototype method.
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Define the method once so all Car instances share the same function.
Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Tesla", "Model 3");

firstCar.getDetails();
secondCar.getDetails();
console.log(`Shared method: ${firstCar.getDetails === secondCar.getDetails}`);
