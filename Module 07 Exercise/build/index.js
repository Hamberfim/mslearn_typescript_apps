"use strict";
// organize code - namespaces and modules
/**
 * // To import a single export from a module:
 * import { <component name> } from '<module name>'
 *
 * // To rename an import, use the as keyword:
 * import { <component name> as <new name> } from '<module name>'
 *
 * // To import the entire module into a single variable, and use it to access the module exports:
 * import * as <variable name> from '<module name>'
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
// // imports a single function in the module
// import { returnGreeting } from './greetings_module.js';
// // imports all exported components in the module
// import * as allGreetingFunctions from './greetings_module.js';
// import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
// // run code
// returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
// allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
// returnGreetingLength('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
