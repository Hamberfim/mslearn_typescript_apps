// generics - code templates
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4, 5]);
numArray.push(19);
console.log(numArray);

let strArray = getArray<string>(['pizza', 'tacos', 'burgers']);
strArray.push('nachos');
console.log(strArray);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
let returnNum = identity<number, string>(1, 'item 1');
console.log(returnNum);

let returnStr = identity<string, string>('id 2', 'item 2');
console.log(returnStr);

let returnBool = identity<boolean, string>(true, 'isTrue');
console.log(returnBool);
