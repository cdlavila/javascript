function factorial(n) {
  if (n === 1) { // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive case
}

console.log('The factorial is: ', factorial(5));

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('The fibonacci is: ', fibonacci(6));

function sum(n) {
  if (n === 1) return 1;

  return n + sum(n - 1);
}

console.log('The sum is: ', sum(5));
