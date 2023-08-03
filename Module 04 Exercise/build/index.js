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
// rest parameters
function addOneOrMore(fNum, ...otherNumbers) {
    let total = fNum;
    for (let index = 0; index < otherNumbers.length; index++) {
        if (isNaN(otherNumbers[index])) {
            continue;
        }
        total += otherNumbers[index];
    }
    return total;
}
console.log(addOneOrMore(5));
console.log(addOneOrMore(5, 2, 2, 2));
function makeMultiTransaction({ deposit, debit }) {
    let depositBalance = deposit - debit;
    let transactionType = depositBalance >= 0 ? 'deposit' : 'debit';
    console.log(`This transaction results in a $${depositBalance} ${transactionType} toward your account.`);
}
makeMultiTransaction({ deposit: 200, debit: 175 });
makeMultiTransaction({ deposit: 20, debit: 75 });
makeMultiTransaction({ deposit: 10, debit: 10 });
let addition = (x, y) => x + y;
let subtraction = (x, y) => x - y;
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addition;
    }
    else {
        return subtraction;
    }
};
console.log(doCalculation('add')(5, 7));
console.log(doCalculation('subtract')(12, 4));
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
// add types to the parameter list, return value, and variables.
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
