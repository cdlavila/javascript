// Start the timer
console.time('myTime');

// Simulate an operation that takes time (for example, a loop)
for (let i = 0; i < 1000000000; i++) {
  // Do something here
}

// Stop the timer and display the elapsed time
console.timeEnd('myTime'); // Output -> myTime: 1005.692ms
