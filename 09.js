//1. Basic Promise

const promis = new Promise((resolve, reject) => {
  const data = true;
  if (data) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});
promis
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//2. Promise Chaining

const chainedPromise = new Promise((resolve) => {
  resolve(1);
});

chainedPromise
  .then((result) => result * 2)
  .then((result) => result * 3)
  .then((result) => console.log(result, "Iuiu")); // Output: 6

//3. Promise.all

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // Output: [1, 2, 3]
  .catch((error) => console.error(error)); // Handles rejection if any promise fails

//4. Promise.allSettled

const promiseS1 = Promise.resolve(1);
const promiseS2 = Promise.reject("Error");
const promiseS3 = Promise.resolve(3);

Promise.allSettled([promiseS1, promiseS2, promiseS3]).then((results) =>
  console.log(results, "settle")
);

//4. Promise.race
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Slow"), 1000)
);
const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Fast"), 500)
);

Promise.race([slowPromise, fastPromise]).then((result) => console.log(result)); // Output: Fast

// Async Await promise

const asyncFunction = async () => {
  try {
    const result = await new Promise((resolve) =>
      resolve("Resolved with async/await!")
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction();
