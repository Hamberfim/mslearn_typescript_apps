"use strict";
// // namespaces
// namespace Greetings {
//   export function returnGreeting(greeting: string) {
//     console.log(`The message from namespace Greetings is ${greeting}.`);
//   }
// }
// namespace GreetingsWithLength {
//   export function returnGreeting(greeting: string) {
//     let greetingLength = getLength(greeting);
//     console.log(
//       `The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`
//     );
//   }
//   function getLength(message: string): number {
//     return message.length;
//   }
// }
// // use a class or function within a namespace, prefix the component name with the namespace name
// // returnGreeting('Hello');                     // Returns error
// Greetings.returnGreeting('Bonjour'); // OK
// GreetingsWithLength.returnGreeting('Hola'); // OK
// nested namespaces
var AllGreetings;
(function (AllGreetings) {
    let Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    let GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
AllGreetings.Greetings.returnGreeting('Bonjour'); // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola'); // OK
// namespaces alias
var greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
