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

// generic class
class processIdentity3<T, U> {
  private _value: T;
  private _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}
let processor3 = new processIdentity3<number, string>(100, 'Hello');
processor3.getIdentity(); // Displays 'Hello'

// generics with custom types and classes
class Car {
  make: string = 'Generic Car';
  doors: number = 4;
}
class ElectricCar extends Car {
  make = 'Electric Car';
  doors = 4;
}
class Truck extends Car {
  make = 'Truck';
  doors = 2;
}
function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myCar = new Car();
accelerate<Car>(myCar);
let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);

/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {
  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      alert('Index is greater than 10');
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}

let cities = new DataStore();

cities.AddOrUpdate(0, 'Mumbai');
cities.AddOrUpdate(1, 'Chicago');
// cities.AddOrUpdate(11, 'London'); // item not added

console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'

// TODO Test items as numbers.
let employeeIDs = new DataStore<number>();
employeeIDs.AddOrUpdate(0, 50);
employeeIDs.AddOrUpdate(1, 60);
employeeIDs.AddOrUpdate(2, 70);
console.log(employeeIDs.GetData(0)); // returns 50

// TODO Test items as objects.
type Pets = {
  name: string;
  breed: string;
  age: number;
};
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
