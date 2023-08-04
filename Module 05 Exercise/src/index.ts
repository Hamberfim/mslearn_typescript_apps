// Declare an interface to ensure class shape - Interfaces solely define how data is structured
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'left' | 'right'): string;
}

// classes members - classes are a template for objects and allow you to define implementation details like methods, fields, and properties
class Car implements Vehicle {
  // static property
  private static numberOfCars: number = 0;
  // Instance Properties
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 2) {
    this._make = make;
    this._color = color;
    // validate doors data
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number!');
    }
    // you use the syntax: 'className.propertyName' instead of 'this.' when accessing the static property.
    Car.numberOfCars++; // Increments the value of the static property
  }

  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }

  get color() {
    return `The color of the car is ${this._color}.`;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number!');
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }

  brake(): string {
    return `${this.worker()} is braking using standard brakes.`;
  }

  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}.`;
  }

  displayCarInfo(): string {
    return `A ${this._color}, ${this._doors} door ${this.worker()}.`;
  }

  protected worker(): string {
    return this._make;
  }

  public static getNumberOfCars(): string {
    return `Number of cars instantiated from the Car class: ${Car.numberOfCars}`;
  }
}

// instantiate
let myFiat = new Car('Fiat', 'Black', 4);
console.log(myFiat.displayCarInfo());
console.log(myFiat.color); // access the get color() accessor
// console.log(myFiat._color); // access the raw data but it's private

let myNissan = new Car('Nissan', 'Red');
console.log(myNissan.displayCarInfo());
console.log(myNissan.accelerate(15));
console.log(myNissan.brake());
console.log(myNissan.turn('left'));

console.log(Car.getNumberOfCars());

// extend a class
class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;

  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  // Methods
  // Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()} is braking using the regenerative braking system.`;
  }

  charge() {
    console.log(this.worker() + ' is charging.');
  }
}

let chevVolt = new ElectricCar('Chevy Volt', 'silver', 325, 2);
console.log(chevVolt.displayCarInfo());
console.log(chevVolt.accelerate(15));
console.log(chevVolt.brake());

// ======== exercise ========
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab End  */

/*  EXERCISE 1 */

class BuildArray {
  // TODO Define the properties
  private _items: number;
  private _sortOrder: 'ascending' | 'descending';

  // TODO Define the constructor
  constructor(items: number, sortOrder: 'ascending' | 'descending') {
    this._items = items;
    this._sortOrder = sortOrder;
  }

  // TODO Define the accessors
  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(sortOrder) {
    this._sortOrder = sortOrder;
  }

  // TODO Define the methods.
  private sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };
  private sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  };
  buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this.items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === 'ascending') {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
