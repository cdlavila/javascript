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

console.log(counterGen.next().value); // 0
console.log(counterGen.next().value); // 1

for (const num of counterGen) {
  console.log(num); // 2, 3, 4
}
