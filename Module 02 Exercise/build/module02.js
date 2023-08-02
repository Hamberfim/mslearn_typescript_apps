"use strict";
var ContractStatus;
(function (ContractStatus) {
    // default is zero index
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
// display the enum value
console.log(employeeStatus);
// display the enum name
console.log(ContractStatus[employeeStatus]);
// any and unknown types
let someRandomValue;
someRandomValue = 10;
someRandomValue = 'pizza';
let otherRandomValue;
otherRandomValue = 'pizza';
// console.log(otherRandomValue.toUpperCase());  // cant access any properties or methods of an unknown type - 'otherRandomValue' is of type 'unknown'
// type assertion - (otherRandomValue as string).toUpperCase() OR (<string>otherRandomValue).toUpperCase()
console.log(otherRandomValue.toUpperCase());
//type guards
// typeof<variable> === 'type' < --this expression is called a predicate
let randomValue = Math.random() > 0.5 ? 'pizza pie in your eye!' : 1.99;
if (typeof randomValue === 'string') {
    console.log(randomValue.toUpperCase());
}
else {
    console.log(`A slice of cheese pizza is $${randomValue}.`);
}
let someObject = Math.random() > 0.5 ? [1, 2, 3] : { name: 'john jr', age: 22 };
if (Array.isArray(someObject)) {
    someObject.forEach((item) => console.log(item));
}
else {
    console.log(`${someObject.name.toUpperCase()} is ${someObject.age}`);
}
// union types and type guards
function addNums(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + '-' + b;
    }
    throw new Error('Parameters must be both numbers or both strings');
}
console.log(addNums('one', 'two'));
console.log(addNums(1, 2));
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};
let myResult;
myResult = 'incomplete'; //* Valid
myResult = 'pass'; //* Valid
let coinToss = Math.random() < 0.5 ? 0 : 1;
function coinFlip(coinToss) {
    if (coinToss === 0) {
        console.log('tails');
    }
    else {
        console.log('heads');
    }
}
coinFlip(coinToss);
