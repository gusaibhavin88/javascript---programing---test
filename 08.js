//Find Index

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray);
console.log(ans);
