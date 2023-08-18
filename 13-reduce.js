// Sum values
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


// Find max
const values = [10, 4, 8, 2, 6];
const max = values.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity);
console.log(max); // Output: 10


// Fruit count
const fruits = ['apple', 'banana', 'apple', 'orange', 'apple'];
const fruitCount = fruits.reduce((countMap, fruit) => {
  countMap[fruit] = (countMap[fruit] || 0) + 1;
  return countMap;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 1, orange: 1 }


// Grouping by property
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Carol', grade: 'A' },
];
const groupedByGrade = students.reduce((groups, student) => {
  groups[student.grade] = groups[student.grade] || [];
  groups[student.grade].push(student);
  return groups;
}, {});
console.log(groupedByGrade);
// Output: { A: [ { name: 'Alice', grade: 'A' }, { name: 'Carol', grade: 'A' } ],
//           B: [ { name: 'Bob', grade: 'B' } ] }


