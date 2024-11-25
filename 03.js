// Reduce
const data = [1, 6, 6, 7, 8];
const sum = data.reduce((acc, num) => acc + num, 0);
console.log(sum);

// array concat
const nestedArray = [[1, 2], [3, 4], [5]];
const data2 = nestedArray.reduce((acc, array) => acc.concat(array), []);
console.log(data2);

// Object
const items = ["apple", "banana", "orange"];
const data3 = items.reduce((acc, item) => {
  acc[item] = item.length;
  return acc; // Return the accumulator
}, {});
console.log(data3);

const itemone = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = itemone.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

// Reverse string
const str = "hello";
const reversed = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversed); // Output: 'olleh'

// Max value
const values = [3, 5, 7, 2, 8];
const max = values.reduce((acc, val) => (val > acc ? val : acc), values[0]);
console.log(max); // Output: 8
