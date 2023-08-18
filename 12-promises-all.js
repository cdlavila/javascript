// Good
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 1 completada");
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 2 completada");
  }, 1500);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 3 completada");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("Todas las promesas se han completado:", results);
  })
  .catch(error => {
    console.error("Al menos una promesa se ha rechazado:", error);
  });

// Error
const promiseError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promesa 2 fallida"));
  }, 1500);
});

Promise.all([promise1, promise2, promise3, promiseError])
  .then(results => {
    console.log("Todas las promesas se han completado:", results);
  })
  .catch(error => {
    console.error("Al menos una promesa se ha rechazado:", error.message);
  });

