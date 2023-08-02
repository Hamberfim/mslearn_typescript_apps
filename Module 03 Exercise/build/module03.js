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
const vanillaServing = {
    flavor: 'Vanilla',
    numberOfScoops: 3,
};
const mintServing = {
    flavor: 'Mint',
    numberOfScoops: 2,
};
function iceCreamOrder(flavorOrder, scoops) {
    if (scoops > flavorOrder.numberOfScoops) {
        console.log(`${flavorOrder.flavor} has a maximum of ${flavorOrder.numberOfScoops}`);
    }
    else {
        console.log(`Your ${scoops} scoops of ${flavorOrder.flavor} ice cream cone is ready.`);
    }
}
iceCreamOrder(vanillaServing, 4);
iceCreamOrder(mintServing, 2);
