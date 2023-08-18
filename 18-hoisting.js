// WITH VARIABLES
// Var
console.log(myVar); // Return 'undefined'
var myVar = 10;

// Let
console.log(myLet); // Return error
let myLet = 10;

// Const
console.log(myConst); // Return error
const myConst = 10;


// WITH FUNCTIONS
// Normal function
myFunction('Before definition'); // Valid call
function myFunction(name) {
  console.log("Hello, I am a NORMAL function called " + name);
}
myFunction('After definition'); // Valid call

// Let function
myLetFunction('Before definition'); // Return error
let myLetFunction = (name) => {
  console.log("Hello, I am a LET function called " + name);
}
myLetFunction('After definition'); // Valid call

// Const function
myConstFunction('Before definition'); // Return error
const myConstFunction = (name) => {
  console.log("Hello, I am a CONST function called " + name);
}
myConstFunction('After definition'); // Valid call

