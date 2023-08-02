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
// collection types
let myList = [3, 2, 1]; // array
let person = ['Dave', 44]; // tuple
// ======= lab exercises =======
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;
firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + ' ' + lastName;
if (ukCitizen) {
    console.log('My name is ' + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log('My name is ' + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
let x;
let y;
let a;
// x = 'five';
x = 5;
y = 7;
a = x + y;
console.log(a);
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason;
    switch (season) {
        case Season.Fall:
            monthsInSeason = 'September to November';
            break;
        case Season.Winter:
            monthsInSeason = 'December to February';
            break;
        case Season.Spring:
            monthsInSeason = 'March to May';
            break;
        case Season.Summer:
            monthsInSeason = 'June to August';
    }
    return monthsInSeason;
}
console.log(whichMonths(0));
console.log(whichMonths(Season.Winter));
/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */
let randomNumbers = [];
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
console.log(randomNumbers);
