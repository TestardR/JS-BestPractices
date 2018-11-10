// NPM settings

console.log('hi');
// step 1 npm init => package.json
// step 2 engines => see package.json, you can lock your node at a certain version. You may want to this to keep your app working
// step 3 to avoid --save => npm config set save=true
// step 4 to avoid version "^4.1", no caret, we want the exact version, => npm config set save-exact=true

// Environment variables

console.log('Express listening on port: ' + process.env.PORT);
// npm install -g foreman
// in package.json set a script "start", node app.js
// run: nf start, it will automatically set your environment variables
// create .env file and set your environment variables

// Cross Platform Gotchas

var myObject = require('./my-object'); // some platforms are case insenstive, while others are. Be careful.
// Everything as to be lowercase and use - between words
console.log(myObject.hi);

// Simplify your world - KISS Principal
