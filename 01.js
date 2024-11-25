const getLongest = (str) => {
  let start = 0;
  let end = 0;
  let longest = "";
  let currentChar = "";
  let charIndexMap = {};

  for (; end < str.length; end++) {
    const char = str[end];
    const charIndex = charIndexMap[char];
    if (charIndex >= start) {
      start = charIndex + 1;
    }

    currentChar = str.slice(start, end + 1);

    if (currentChar.length > longest.length) {
      longest = currentChar;
    }
    charIndexMap[char] = end;
  }
  return longest;
};

const result = getLongest("qwerttyuiqasdfgjklzzbnmvrtyuioplkj");
console.log(result);
