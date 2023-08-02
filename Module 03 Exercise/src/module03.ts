// interface -  used to describe an object
interface StaffMember {
  fName: string;
  lName: string;
  displayFullName(): string;
}

// contact between any two pieces of TypeScript code
let employee1: StaffMember = {
  fName: 'Bill',
  lName: 'Williams',
  displayFullName(): string {
    return this.fName + ' ' + this.lName;
  },
};
console.log(employee1.displayFullName());

// interface
interface IceCream {
  flavor: string;
  numberOfScoops: number;
  instructions?: string;
}

// contact
const vanillaServing: IceCream = {
  flavor: 'Vanilla',
  numberOfScoops: 3,
};

// contact
const mintServing: IceCream = {
  flavor: 'Mint',
  numberOfScoops: 2,
};

function iceCreamCone(flavorOrder: IceCream, scoops: number) {
  if (scoops > flavorOrder.numberOfScoops) {
    console.log(`${flavorOrder.flavor} has a maximum of ${flavorOrder.numberOfScoops} scoops`);
  } else {
    console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream cone is ready.`);
  }
}
iceCreamCone(vanillaServing, 4);
iceCreamCone(mintServing, 2);

// extend an interface
interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let vanillaSundaeOrder: Sundae = {
  flavor: 'vanilla',
  numberOfScoops: 2,
  sauce: 'strawberry',
  nuts: true,
};

let mintSundaeOrder: Sundae = {
  flavor: 'mint',
  numberOfScoops: 2,
  sauce: 'chocolate',
  nuts: false,
};

function iceCreamSundae(flavorOrder: Sundae, scoops: number) {
  if (scoops > flavorOrder.numberOfScoops) {
    console.log(`${flavorOrder.flavor} sundae has a maximum of ${flavorOrder.numberOfScoops} scoops`);
  } else {
    console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream sundae is ready.`);
  }
}
iceCreamSundae(vanillaSundaeOrder, 4);
iceCreamSundae(mintSundaeOrder, 2);
