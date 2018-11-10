// Global Variables
// Strict Mode
// Read Only Properties
// Deleting properties
// Octas and Hexidecimals
// With
// This
// This in New Objects

// Global Variables

// In a function, if you declare variables without the "var", these variables will leak to global scope. Avoid it!

// var toPrint = 'print me';

// function print(out) {
//   stringToPrint = out;
//   console.log(stringToPrint);
// }

// print('Hello');
// console.log(stringToPrint); // Hello

// Strict Mode

// 'use strict';

// var toPrint = 'print me';

// function print(out) {
//   stringToPrint = out;
//   console.log(stringToPrint);
// }

// print('Hello');
// console.log(stringToPrint); // won't work

//////

// you may not want to have it at the top of your file. It will set strict mode to your whole.

// var toPrint = 'print me';

// function print(out) {
//   'use strict';
//   var stringToPrint = out;
//   console.log(stringToPrint);
// }

// print('Hello');

// Read Only Properties
// 'use strict';

// var obj = {};

// Object.defineProperty(obj, 'readOnly', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'This var is read only'
// });

// obj.readOnly = 'I wrote this'; // does not work, won't show without 'use strict';
// console.log(obj.readOnly);

// Deleting Properties

// var obj = { a: 100, b: 200 };
// delete obj.a;
// console.log(obj);
// 'use strict';

// var obj = { a: 100, b: 200 },
//   myVar = 10;

// delete obj.a;
// delete myVar; // does not work strict mode
// delete obj; // does not work without strict mode
// console.log(obj);
// console.log(myVar);

// Duplicates
// 'use strict';

// function x(a, b, a) {
//   console.log(a);
// }

// x(1, 2, 3); // 3 without strict mode, error with strict mode

// Octals and Hexidemicals
// 'use strict';

// var x = 120,
//   y = 012; // 0 in front of a number becomes an octo number. 012 in octo is 10... // Does not work in strict mode

// console.log(x + y); // 10

// if I want to use octo, I have to use parseInt(12, 8);

// With

// 'use strict';

// var obj = {
//   a: {
//     b: {
//       c: 'hello'
//     }
//   }
// };

// console.log(obj.a.b.c);

// var c = 'this is important'; // not a good practice, to avoid

// with (obj.a.b) { // does not work in strict mode
//   console.log(c);
// }

// (function(newVar) {
//   // alternative
//   console.log(newVar);
// })(obj.a.b.c);

// This

// 'use strict';

// var obj = {
//   val: 'Hi there',
//   printVal: function() {
//     // console.log(this);
//     console.log(this.val);
//   }
// };

// obj.printVal();

// var obj2 = {
//   val: 'Whats up'
// };

// obj2.printVal = obj.printVal;

// obj2.printVal();

// var print = obj.printVal.bind(obj);
// print(); // does not work in strict mode, because there is not object attached to it, otherwise this is referrign to the global scope. To avoid it, we have to bind this.

// Three ways to make 'this' Work
// obj.printVal(); this will be refering to obj
// obj.printVal.bind(obj); this will be refering to obj
// print() // does not work, bind it with obj. or .bind(obj)
// ... new keyword

// This in New Objects

// var obj = function() {
//   var _this = this;
//   _this.hello = 'hello';

//   _this.greet = function() {
//     console.log(_this.hello);
//   };

//   this.delayGreeting = function() {
//     setTimeout(_this.greet, 1000);
//   };
// };

// var greeter = new obj(); // new binds the this keywork

// greeter.greet();
// greeter.delayGreeting();

// => To avoid figuring out what "this" is referring to, it easier to assign it to variable, here _this.
