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

interface IceCream {
  flavor: string;
  numberOfScoops: number;
}

const vanillaServing: IceCream = {
  flavor: 'Vanilla',
  numberOfScoops: 3,
};

const mintServing: IceCream = {
  flavor: 'Mint',
  numberOfScoops: 2,
};

function iceCreamOrder(flavorOrder: IceCream, scoops: number) {
  if (scoops > flavorOrder.numberOfScoops) {
    console.log(`${flavorOrder.flavor} has a maximum of ${flavorOrder.numberOfScoops}`);
  } else {
    console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream cone is ready.`);
  }
}
iceCreamOrder(vanillaServing, 4);
iceCreamOrder(mintServing, 2);
