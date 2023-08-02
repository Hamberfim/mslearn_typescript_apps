"use strict";
// contact between any two pieces of TypeScript code
let employee1 = {
    fName: 'Bill',
    lName: 'Williams',
    displayFullName() {
        return this.fName + ' ' + this.lName;
    },
};
console.log(employee1.displayFullName());
// contact
const vanillaServing = {
    flavor: 'Vanilla',
    numberOfScoops: 3,
};
// contact
const mintServing = {
    flavor: 'Mint',
    numberOfScoops: 2,
};
function iceCreamCone(flavorOrder, scoops) {
    if (scoops > flavorOrder.numberOfScoops) {
        console.log(`${flavorOrder.flavor} has a maximum of ${flavorOrder.numberOfScoops} scoops`);
    }
    else {
        console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream cone is ready.`);
    }
}
iceCreamCone(vanillaServing, 4);
iceCreamCone(mintServing, 2);
let vanillaSundaeOrder = {
    flavor: 'vanilla',
    numberOfScoops: 2,
    sauce: 'strawberry',
    nuts: true,
};
let mintSundaeOrder = {
    flavor: 'mint',
    numberOfScoops: 2,
    sauce: 'chocolate',
    nuts: false,
};
function iceCreamSundae(flavorOrder, scoops) {
    if (scoops > flavorOrder.numberOfScoops) {
        console.log(`${flavorOrder.flavor} sundae has a maximum of ${flavorOrder.numberOfScoops} scoops`);
    }
    else {
        console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream sundae is ready.`);
    }
}
iceCreamSundae(vanillaSundaeOrder, 4);
iceCreamSundae(mintSundaeOrder, 2);
