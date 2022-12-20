// JavaScript's syntax
// To taking into account: the variables and functions notation in JavaScript is Camel case (myVariable, miFunction)

// Display in console
console.log("\nJavaScript's syntax")

// Define variables
console.log('\nVariables')
let a = 1 // It is used when the variable vale can be modified
console.log(a)
a = 2
console.log(a)
const b = 'Carlos' // It is used when the variable value can't be modified
console.log(b)

// Data types
console.log('\nBasic Data types')
const exampleNumber = 2022
const exampleString = 'string'
const exampleBool = true
const exampleDate = new Date()

console.log(exampleNumber)
console.log(exampleString)
console.log(exampleBool)
console.log(exampleDate)

// Data structures more used
console.log('\nData structures more used')
console.log('Array')
const exampleArray = [1, 2, 3.6, 'tres', ['uno', 'dos', 'tres']]
console.log(exampleArray)
// Accessing elements of an array
console.log(exampleArray[3])
// Add a new element to the end of the array
exampleArray.push(4)
console.log(exampleArray)
// Remove the last element of the array
exampleArray.pop()
console.log(exampleArray)
// For more information about arrays see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log('Object') // Key - value pairs
const exampleObject = {
  name: 'Carlos',
  age: 21,
  partners: ['Juan Esteban', 'Santiago', 'Juan Camilo']
}
console.log(exampleObject)
// Getting the value of a property of an object
console.log(exampleObject.name)
// Getting all keys of an object
console.log(Object.keys(exampleObject))
// Getting all values of an object
console.log(Object.values(exampleObject))
// For more information about objects see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

/* Arithmetic operators
  + addition
  - subtraction
  * multiplication
  / division
  ** exponentiation
  % modulus
For other math operations you can use the Math object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
console.log('\nArithmetic operators')
console.log(2 + 3)
console.log(10 - 3)
console.log(5 * 3)
console.log(20 / 4)
console.log(3 ** 3)
console.log(10 % 3)

/* Comparison operators
  === strict equality
  !== not equal strict equality
  > greater than
  < less than
  >= greater than or equal to
  <= less than or equal to
*/
console.log('\nComparison operators')
const x = 2
const y = 1 + 1
console.log(x === y) // true
console.log(x !== y) // false
console.log(x > y) // false
console.log(x < y) // false
console.log(x >= y) // true
console.log(x <= y) // true

/* Logical operators
  && and
  || or
  ! not
*/
console.log('\nLogical operators')
const username = 'Carlos10'
const password = '123456'
const isDeactivated = false
console.log(username === 'Carlos10' && password === '54321') // false
console.log(username === 'Carlos10' || password === '54321') // true
console.log(username === 'Carlos10' && !isDeactivated) // true

// Conditional
console.log('\nConditional')
if (exampleNumber === 2022) { // True sentences
  console.log('We are in 2022')
} else { // False sentences
  console.log('We are not in 2022')
}

// Switch
console.log('\nSwitch')
switch (exampleNumber) {
  case 2021:
    console.log('We are in 2021')
    break
  case 2022:
    console.log('We are in 2022')
    break
  default:
    console.log('We are not in 2021 or 2022')
}

// Ternary operator
console.log('\nTernary operator')
exampleNumber === 2022 ? console.log('We are in 2022') : console.log('We are not in 2022')

// Functions
console.log('\nFunctions')
function add (a, b) {
  return a + b
}
console.log('The sum is: ', add(1, 2))

const multiply = (a, b) => { // It is known as an arrow function
  return a * b
}
console.log('The multiplication is: ', multiply(5, 2))

const divide = (a, b) => a / b // If the function only has one line, you can write it in this way
console.log('The division is: ', divide(10, 2))

// Loops
console.log('\nNormal for loop')
for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log('\nWhile loop')
let j = 5
while (j > 0) {
  console.log(j)
  j--
}

console.log('\nDo while loop')
let k = 0
do {
  console.log(k)
  k += 2
} while (k < 10)

// Loops in arrays
console.log('\nFor in arrays')
const roles = ['admin', 'user', 'guest']
for (const role in roles) {
  console.log(role)
}

console.log('\nFor of arrays')
for (const role of roles) {
    console.log(role)
}

console.log('\nFor each in arrays')
const names = ['carlos', 'juan', 'camilo']
names.forEach(function (name) {
  console.log(name)
})

// Loops in objects
console.log('\nFor in objects')
const professor = {
  name: 'Cesar Jaramillo',
  age: 40,
  degree: 'PhD'
}
for (const [key, value] of Object.entries(professor)) {
  console.log(`${key}: ${value}`)
}

// Classes
console.log('\nClasses')
class Person {
  // Constructor
  constructor (name, birthDate, job) {
    // You define the attributes of the class inside the constructor
    this.name = name
    this.birthDate = birthDate
    this.job = job
  }

  // Methods
  sayHello () {
    console.log(`Hello, my name is ${this.name}`)
  }

  sayBirthdate () {
    console.log(`I was born on ${this.birthDate}`)
  }

  sayJob () {
    console.log(`I am a ${this.job}`)
  }

  calculateAge () {
    const today = new Date()
    const birthDate = new Date(this.birthDate)
    return today.getFullYear() - birthDate.getFullYear()
  }
}

const personExample = new Person('Carlos', '10/08/2001', 'Software developer')
personExample.sayHello()
personExample.sayBirthdate()
personExample.sayJob()
console.log('Age calculation: ', personExample.calculateAge())

// Inheritance
console.log('\nInheritance')
class Student extends Person {
  constructor (name, birthDate, job, university, grade) {
    super(name, birthDate, job) // Here you inherit the attributes of the parent class
    this.university = university
    this.grade = grade
  }

  sayUniversity () {
    console.log(`I study at ${this.university}`)
  }

  sayGrade () {
    console.log(`My grade is ${this.grade}`)
  }
}

const studentExample = new Student('Santiago', '31/03/2000', 'Software developer', 'Technological University of Pereira', '9')
studentExample.sayHello()
studentExample.sayBirthdate()
studentExample.sayJob()
studentExample.sayUniversity()
studentExample.sayGrade()
console.log('Age calculation: ', personExample.calculateAge())

// Async - await: When a process take some time, we can use async and await to wait for the process to finish
console.log('\nAsync - await')
console.log('Watch this video: https://www.youtube.com/watch?v=_1LK3dz2XsM')
console.log('To understand async and await, please read the documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function')
