"use strict";
// generics - code templates
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
numArray.push(19);
console.log(numArray);
let strArray = getArray(['pizza', 'tacos', 'burgers']);
strArray.push('nachos');
console.log(strArray);
