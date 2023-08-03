"use strict";
// named functions are hoisted
console.log(addNumbers(1, 3));
// can be used before declared because they are loaded into execution before any code runs
function addNumbers(a, b) {
    return a + b;
}
// function expressions - anonymous functions - runs when encountered
let addingNumbers = function (a, b) {
    return a + b;
};
console.log(addingNumbers(4, 4));
// arrow functions (Lambda, fat arrow functions) are short hand syntax for anonymous functions
let adding = (a, b) => a + b;
console.log(adding(12, 3));
