function performTask(task, callback) {
  console.log("Performing task -> " + task);
  setTimeout(() => {
    console.log("Task completed");
    callback();
  }, 2000);
}

function callbackAfterTask() {
  console.log("Task completed, now the callback is executed.");
}

performTask("Example", callbackAfterTask);
