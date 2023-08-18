const intervalId = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId); // Stop the interval execution after 8 seconds
  console.log("Interval stopped");
}, 8000);
