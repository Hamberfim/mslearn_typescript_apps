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
