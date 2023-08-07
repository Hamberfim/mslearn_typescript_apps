"use strict";
// generics - code templates
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
numArray.push(19);
console.log(numArray);
let strArray = getArray(['pizza', 'tacos', 'burgers']);
strArray.push('nachos');
console.log(strArray);
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNum = identity(1, 'item 1');
console.log(returnNum);
let returnStr = identity('id 2', 'item 2');
console.log(returnStr);
let returnBool = identity(true, 'isTrue');
console.log(returnBool);
// generic constraints
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 0 };
let pets2 = { 0: 'cats', 1: 'dogs', 2: 'parrots', 3: 'fish' };
console.log(getPets(pets1, 'fish')); // Returns 0
console.log(getPets(pets2, 2)); // Returns 'parrots'
function identity2(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + '-' + value;
    }
    return result;
}
console.log(identity2(2, 'pop'));
console.log(identity2('one', 'pop'));
let returnNumber = {
    value: 25,
    message: 'Hello!',
};
let returnString = {
    value: 'Hello!',
    message: 25,
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!');
class processIdentity2 {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor2 = new processIdentity2(100, 'Hello');
processor2.process(); // Displays 'Hello'
// processor2.value = '100';       // Type check error
// generic class
class processIdentity3 {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor3 = new processIdentity3(100, 'Hello');
processor3.getIdentity(); // Displays 'Hello'
// generics with custom types and classes
class Car {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myCar = new Car();
accelerate(myCar);
let myElectricCar = new ElectricCar();
accelerate(myElectricCar);
let myTruck = new Truck();
accelerate(myTruck);
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            alert('Index is greater than 10');
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, 'Mumbai');
cities.AddOrUpdate(1, 'Chicago');
// cities.AddOrUpdate(11, 'London'); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let employeeIDs = new DataStore();
employeeIDs.AddOrUpdate(0, 50);
employeeIDs.AddOrUpdate(1, 60);
employeeIDs.AddOrUpdate(2, 70);
console.log(employeeIDs.GetData(0)); // returns 50
let pets = new DataStore();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
