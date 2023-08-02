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
