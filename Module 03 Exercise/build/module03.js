"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream[0];
console.log(myStr);
// use interface to describe a JS API
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
showPost();
