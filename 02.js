// Longest word

const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => a - b);
  console.log(words.at(-1));
};

const result = longestWord("hello world chine raj maharaja");
// console.log(result);
// words = words.sort((a, b) => b.localeCompare(a));  for string inside array
// words = words.sort((a, b) => b.length - a.length); for
// words = words.sort((a, b) => b - a); for number
