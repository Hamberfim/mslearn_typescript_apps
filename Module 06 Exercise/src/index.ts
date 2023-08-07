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
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 0 };
let pets2 = { 0: 'cats', 1: 'dogs', 2: 'parrots', 3: 'fish' };

console.log(getPets(pets1, 'fish')); // Returns 0
console.log(getPets(pets2, 2)); // Returns 'parrots'

type ValidTypes = number | string;
function identity2<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;
  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + '-' + value;
  }
  return result;
}

console.log(identity2<number, string>(2, 'pop'));
console.log(identity2<string, string>('one', 'pop'));

// generic interface
interface Identity3<T, U> {
  value: T;
  message: U;
}
let returnNumber: Identity3<number, string> = {
  value: 25,
  message: 'Hello!',
};
let returnString: Identity3<string, number> = {
  value: 'Hello!',
  message: 25,
};

// generic interface as a function type - generic method signature
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}
function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');

// generic interface as a class type
interface ProcessIdentity2<T, U> {
  value: T;
  message: U;
  process(): T;
}
class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}
let processor2 = new processIdentity2<number, string>(100, 'Hello');
processor2.process(); // Displays 'Hello'
// processor2.value = '100';       // Type check error
