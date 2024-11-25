// average

const average = (word) => {
  const data = word.reduce((acc, char) => {
    return (acc = acc + char);
  }, 0);

  return data / word.length;
};

const dataNew = average([10, 10]);
console.log(dataNew, "M");

// remove Dup[licate]

const removeDuplicate = (word) => {
  const newData = new Set();

  word.forEach((element) => {
    newData.add(element);
  });
  return [...newData];
};

const removeDuplicateAns = removeDuplicate([10, 10, 9, 3, 3, 5, 6, 4, 1, 9, 1]);
console.log(removeDuplicateAns, "removeDuplicateAns");

// sum and squate

const sumSquare = (word) => {
  return word.reduce((acc, char) => {
    return (acc = char * char + acc);
  }, 0);
};

const sumSquareAns = sumSquare([10, 20]);
console.log(sumSquareAns, "M");

// Minimun

const minimun = (word) => {
  return word.sort((a, b) => b - a)[0];
};

const minimunAns = minimun([10, 20, -2, -100]);
console.log(minimunAns, "M");

// Snack case

const snack = (word) => {
  word = word.split(" ");
  word = word.join("_");
  return word;
};

const snackAns = snack("test hello world");
console.log(snackAns, "M");

// Snack case
const snackHello = (os) => {
  if (os.charCodeAt(0) >= 65 && os.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
};

const snackHelloAnd = snackHello("M");
console.log(snackHelloAnd, "M");

// str.startWith;
