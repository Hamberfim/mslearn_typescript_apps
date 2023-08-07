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

// generic constraints
type ValidTypes = number | string;
function keyIdentity<T extends ValidTypes, U>(value: T, message: U): Object {
  return { value, message };
}

console.log(keyIdentity<number, string>(1, 'pop'));
console.log(keyIdentity('one', 'pop'));

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 0 };
let pets2 = { 0: 'cats', 1: 'dogs', 2: 'parrots', 3: 'fish' };

console.log(getPets(pets1, 'fish')); // Returns 0
console.log(getPets(pets2, 2)); // Returns 'parrots'
