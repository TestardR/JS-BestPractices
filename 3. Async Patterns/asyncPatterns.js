// Callbacks
// Promises
// ES6 and Babel
// Async - Await

// Callbacks

// 1. We want named functions
// 2. callback works with (err, results) { // You have a pattern to deal with callbacks
// if (err) {
//     return done(err, null);
// }
// }
// 3. return you callbakcks (err and results)

// Promises

// Step 1, no promises, but callbacks
// function asyncMethod(message, cb) {
//   setTimeout(function() {
//     console.log(message);
//     cb();
//   }, 500);
// }

// asyncMethod('Open DB Connection', function() {
//   asyncMethod('Find User', function() {
//     asyncMethod('Validate User', function() {
//       asyncMethod('do stuff', function() {});
//     });
//   });
// });

// Step 2, promises
// function asyncMethod(message) {
//   return new Promise(function(fullfill, reject) {
//     setTimeout(function() {
//       console.log(message);
//       fullfill();
//     }, 500);
//   });
// }

// asyncMethod('Open DB Connection').then(function() {
//   asyncMethod('Find User').then(function() {
//     asyncMethod('Validate User').then(function() {
//       asyncMethod('do stuff').then(function() {});
//     });
//   });
// });

// Step 3, organizing promises
// function asyncMethod(message) {
//   return new Promise(function(fullfill, reject) {
//     setTimeout(function() {
//       console.log(message);
//       fullfill();
//     }, 500);
//   });
// }

// function doStuff() {
//   asyncMethod('do stuff').then(function() {});
// }

// function validateUser() {
//   asyncMethod('Validate User').then(doStuff);
// }

// function findUser() {
//   asyncMethod('Find User').then(validateUser);
// }

// asyncMethod('Open DB Connection').then(findUser);

// Step 4, returning promises

// function asyncMethod(message) {
//   return new Promise(function(fullfill, reject) {
//     setTimeout(function() {
//       console.log(message);
//       fullfill();
//     }, 500);
//   });
// }

// function findUser() {
//   return asyncMethod('Find User');
// }

// function validateUser() {
//   return asyncMethod('Validate User').then(doStuff);
// }

// function doStuff() {
//   return asyncMethod('do stuff');
// }

// asyncMethod('Open DB Connection')
//   .then(findUser)
//   .then(validateUser)
//   .then(doStuff)
//   .then(function() {});

// Using ES6 and Babel

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('I see i....' + i);

// To make use of ES6, you have to
// 1. npm install -g babel-cli
//2 create .babelrc
//{
//   "presets": ["es2015"],
//   "plugins": []
// }
// 3. babel asyncPattern.js -o es6.js // or without this step
// Change src to es6.js in your html

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('I see i....' + i);

// Async - Await
'use strict';
function asyncMethod(message, num) {
  return new Promise(function(fullfill, reject) {
    setTimeout(function() {
      console.log(message + ' ' + num);
      fullfill(num + 1);
    }, 500);
  });
}

async function main() {
  // await does eliminates the callback, it will wait for the async methods to finish before continuing
  var one = await asyncMethod('Open DB Connection', 0);
  var two = await asyncMethod('Find User', one);
  var three = await asyncMethod('Validate User', two);
  var four = await asyncMethod('do stuff', three);
}

main();
