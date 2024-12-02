// Mid MNum
const mediumNum = (array) => {
  array = array.sort();
  let midIndex =
    array.length % 2 !== 0
      ? parseInt(array.length / 2)
      : array[array.length / 2] + array[array.length / 2 + 1] / 2;
  return midIndex;
};

const result = mediumNum([5, 6, 3, 8, 9, 3, 2, 4]);
console.log(result, "tesy");

// count

const mediumNum2 = (array) => {
  return array.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] = acc[val] + 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
};

const result2 = mediumNum2([5, 6, 3, 8, 9, 3, 2, 4, 4, 4]);
console.log(result2, "tesy");

let num = 0;
let key = "";
const datsa = Object.keys(result2).forEach((element) => {
  if (result2[element] > num) {
    key = element;
    num = result2[element];
  }
});

console.log(num);
console.log(key);
