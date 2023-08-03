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
