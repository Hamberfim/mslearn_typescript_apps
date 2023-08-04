"use strict";
// classes members
class Car {
    // Constructor
    constructor(make, color, doors = 2) {
        this._make = make;
        this._color = color;
        // validate doors data
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number!');
        }
        // you use the syntax: 'className.propertyName' instead of 'this.' when accessing the static property.
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return `The color of the car is ${this._color}.`;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number!');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}.`;
    }
    displayCarInfo() {
        return `A ${this._color}, ${this._doors} door ${this.worker()}.`;
    }
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return `Number of cars instantiated from the Car class: ${Car.numberOfCars}`;
    }
}
// static property
Car.numberOfCars = 0;
// instantiate
let myFiat = new Car('Fiat', 'Black', 4);
console.log(myFiat.displayCarInfo());
console.log(myFiat.color); // access the get color() accessor
// console.log(myFiat._color); // access the raw data but it's private
let myNissan = new Car('Nissan', 'Red');
console.log(myNissan.displayCarInfo());
console.log(myNissan.accelerate(15));
console.log(myNissan.brake());
console.log(myNissan.turn('left'));
console.log(Car.getNumberOfCars());
