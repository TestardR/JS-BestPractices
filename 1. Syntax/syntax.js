// Semicolons
// Automatic Semicolon Insertion - 3 rules

// Rule 1a: The offending token is separated from the previous token by at least one LineTerminator
// var a = 12;
// var b = 12
// Rule 1b: The offending token is }
// if(a){console.log(a);}

// Rule 2: A semicolon is automatically inserted at the end of the input stream.
// console.log(a + b);

// Rule 3:

// Restricted Production : continue, break, return, or throw...

// Linting

var x = 4;
var y = 5;

console.log(x + y);

// Curly Braces

function service() {
  var get = function() {
    console.log('get');
  };
  var set = function() {
    console.log('set');
  };
  return {
    get: get,
    set: set
  };
}

// Equality

// == type conversion (!=)
// === no type conversion (!==)

// Variables

// Hoisting : JS's default behavior of moving all declarations to the top of the current scope
// var will be moved to the top, not its value. That's why we get undedined in this case:
// console.log(myVariable);
// var myVariable = 10;

// var myVariable = 10;
// function func() {
//   var myVariable;
//   myVariable = 25;
// }
// func();
// console.log(myVariable); // 10

// var myVariable = 10;
// function func() {
//   myVariable = 25;
// }
// func();
// console.log(myVariable); // 25

// Functions
// Declarations :
// myFunc();
// function myFunc() {
//   console.log('Hi from my func');
// }
// Expressions:
// var expression = function() {
//   console.log('Hi from my func');
// };
// expression(); // 'Hi from my func'

expression(); // Undefined
var expression = function() {
  console.log('Hi from my func');
};
// var is hoisted but not its content

// BEST PRACTICES
// variable first
var x = 10;
// functions next
function print(input) {
  // variables first
  var x =
    0 /
    // functions next
    function log() {
      //log stuff
    };
  // run code
  console.log(input);
}
// run code
print(10);
