function messageDecorator(func) {
  return function wrapper() {
    console.log("Before function execution");
    func();
    console.log("After function execution");
  };
}

function sayHello() {
  console.log("Hello, world!");
}

// Decorate the sayHello function
sayHello = messageDecorator(sayHello);

// We call the function
sayHello();

