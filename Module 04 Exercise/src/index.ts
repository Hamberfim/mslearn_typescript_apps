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

// exercise - correct these functions so that are type safe
function displayAlert(message: string): void {
  console.log('The message is ' + message);
}
displayAlert('complete.');

function sum(input: number[]): number {
  let total = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}
console.log(sum([3, 3, 5]));
