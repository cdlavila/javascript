function* counter(max) {
  let n = 0;
  while (n < max) {
    yield n;
    n++;
  }
}

// Using the generator
const counterGen = counter(5);
console.log(typeof counterGen); // object
console.log(counterGen); // Object [Generator] {}
for (const num of counterGen) {
  console.log(num);
}
