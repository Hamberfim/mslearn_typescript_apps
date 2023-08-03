// named functions are hoisted
console.log(addNumbers(1, 3));
// can be used before declared because they are loaded into execution before any code runs
function addNumbers(a: number, b: number): number {
  return a + b;
}

// function expressions - anonymous functions - runs when encountered
let addingNumbers = function (a: number, b: number): number {
  return a + b;
};
console.log(addingNumbers(4, 4));

// arrow functions (Lambda, fat arrow functions) are short hand syntax for anonymous functions
let adding = (a: number, b: number): number => a + b;
console.log(adding(12, 3));

// rest parameters
function addOneOrMore(fNum: number, ...otherNumbers: number[]): number {
  let total: number = fNum;
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

// deconstruction object parameters
interface MultiTransaction {
  deposit: number;
  debit: number;
}
function makeMultiTransaction({ deposit, debit }: MultiTransaction) {
  let depositBalance: number = deposit - debit;
  let transactionType: string = depositBalance >= 0 ? 'deposit' : 'debit';
  console.log(`This transaction results in a $${depositBalance} ${transactionType} toward your account.`);
}
makeMultiTransaction({ deposit: 200, debit: 175 });
makeMultiTransaction({ deposit: 20, debit: 75 });
makeMultiTransaction({ deposit: 10, debit: 10 });

// type calculate = (a: number, b: number) => number;
interface Calculate {
  (x: number, y: number): number;
}

let addition: Calculate = (x: number, y: number): number => x + y;
let subtraction: Calculate = (x: number, y: number): number => x - y;
let doCalculation = (operation: 'add' | 'subtract'): Calculate => {
  if (operation === 'add') {
    return addition;
  } else {
    return subtraction;
  }
};
console.log(doCalculation('add')(5, 7));
console.log(doCalculation('subtract')(12, 4));

// lab exercises
type compareFunctionType = (a: number, b: number) => number;
let sortDescending: compareFunctionType = (a: number, b: number) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
};

let sortAscending: compareFunctionType = (a: number, b: number) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

// add types to the parameter list, return value, and variables.
function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
  let randomNumbers: number[] = [];
  let nextNumber: number;

  for (let counter = 0; counter < items; counter++) {
    nextNumber = Math.ceil(Math.random() * (100 - 1));
    if (randomNumbers.indexOf(nextNumber) === -1) {
      randomNumbers.push(nextNumber);
    } else {
      counter--;
    }
  }

  if (sortOrder === 'ascending') {
    return randomNumbers.sort(sortAscending);
  } else {
    return randomNumbers.sort(sortDescending);
  }
}
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
