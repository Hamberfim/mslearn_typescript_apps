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
namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(
        `The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`
      );
    }
    function getLength(message: string): number {
      return message.length;
    }
  }
}
AllGreetings.Greetings.returnGreeting('Bonjour'); // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola'); // OK

// namespaces alias
import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
