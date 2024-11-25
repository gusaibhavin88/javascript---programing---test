// Revern names should be same

const reverseWord = (str) => {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) return true;
  return false;
};

const data = reverseWord("affa");
console.log(data);

// Max number of words

const maxWords = (word) => {
  return word.reduce((acc, char) => {
    return char > acc ? char : acc;
  }, 0);
};

const dataNew = maxWords([-1, -5, -73, 7]);
console.log(dataNew);

// Factorial
const factWords = (word) => {
  let i = 1;
  let ans = 1;
  for (; i <= word; i++) {
    ans = ans * i;
  }
  return ans;
};

const factWordsAns = factWords(0);

console.log(factWordsAns);
