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
function keyIdentity(value, message) {
    return { value, message };
}
console.log(keyIdentity(1, 'pop'));
console.log(keyIdentity('one', 'pop'));
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 0 };
let pets2 = { 0: 'cats', 1: 'dogs', 2: 'parrots', 3: 'fish' };
console.log(getPets(pets1, 'fish')); // Returns 0
console.log(getPets(pets2, 2)); // Returns 'parrots'
