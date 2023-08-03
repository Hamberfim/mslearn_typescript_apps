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
