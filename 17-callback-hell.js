// Callback hell example
function simulateAsyncAPI(text, delay, callback) {
  setTimeout(() => {
    console.log(text);
    callback();
  }, delay);
}

simulateAsyncAPI("Operation 1 - Callback hell", 1000, () => {
  simulateAsyncAPI("Operation 2 - Callback hell", 500, () => {
    simulateAsyncAPI("Operation 3 - Callback hell", 100, () => {
      // More nested operations...
    });
  });
});


// Callback hell solution (async / await)
function simulateAsyncAPIWithAsyncAwait(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

async function performOperations() {
  try {
    await simulateAsyncAPIWithAsyncAwait("Operation 1 - async / await", 1000);
    await simulateAsyncAPIWithAsyncAwait("Operation 2 - async / await", 500);
    await simulateAsyncAPIWithAsyncAwait("Operation 3 - async / await", 100);
    // More operations...
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
performOperations();


// Callback hell solution (Promises)
function simulateAsyncAPIWithPromises(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, delay);
  });
}

simulateAsyncAPIWithPromises("Operation 1 - Promises", 1000)
  .then(() => simulateAsyncAPIWithPromises("Operation 2 - Promises", 500))
  .then(() => simulateAsyncAPIWithPromises("Operation 3 - Promises", 100))
  .then(() => {
    // More operations...
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
