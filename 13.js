// Recursive Function Factorial

const functionData = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * functionData(num - 1);
  }
};

const item = functionData(5);
console.log(item, "test");

//fibonacci
const fibonacci = (n) => {
  if (n <= 0) return 0; // Base case for n = 0
  if (n === 1) return 1; // Base case for n = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
};

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5 (sequence: 0, 1, 1, 2, 3, 5)
console.log(fibonacci(10)); // 55
