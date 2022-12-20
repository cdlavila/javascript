function factorial(n) {
  if (n === 1) { // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive case
}

console.log('El factorial es: ', factorial(5));

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('El fibonacci es: ', fibonacci(6));