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
