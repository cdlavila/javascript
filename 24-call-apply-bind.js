function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.title}.`);
}

const person = { title: "Mr" };

// Call
greet.call(person, "John"); // Output: "Hello, John! I'm Mr."

// Apply
greet.apply(person, ["John"]); // Output: "Hello, John! I'm Mr."

// Bind
const greetPerson = greet.bind(person);
greetPerson("John"); // Output: "Hello, John! I'm Mr."
