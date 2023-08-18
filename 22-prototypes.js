// Object definition using a constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the constructor
Animal.prototype.sayHello = function() {
  console.log(`Hello, I am ${this.name}`);
};

// Creating instances of the Animal object
const cat = new Animal("Cat");
const dog = new Animal("Dog");

cat.sayHello(); // Output: "Hello, I am Cat"
dog.sayHello(); // Output: "Hello, I am Dog"
