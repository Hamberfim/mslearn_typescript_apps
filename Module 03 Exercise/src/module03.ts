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

// use an interface to create an indexable/Key types
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

// use interface to describe a JS API
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log('Post #' + post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
  console.log('Title: ' + post.title);
  console.log('Body: ' + post.body);
}

showPost();
