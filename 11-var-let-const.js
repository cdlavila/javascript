// Var
var x = 'test'
console.log(x) // test
if (true) {
  var x = 5
}
console.log(x) // 5
x = 10
console.log(x) // 10



// Let
if (true) {
  let y = 15
  console.log(y) // 5
}
console.log(y) // ReferenceError: y is not defined



// Const
const z = 20
console.log(z) // 20
if (true) {
  const z = 25 // No error because it is in a different scope
  console.log(z) // 25
}
const z = 30 // Error because it is already defined
