// Repeat Number

const item = (str, num) => {
  let i = 0;

  let array = [];
  for (; i < num; i++) {
    array.push(str);
  }
  return (array = array.join(""));
};

const result = item("abc", 5);
console.log(result);

// Truncated string

const item1 = (str, num) => {
  const data = str.split(" ");
  if (str.trim().length > num) {
    str = `${data[0]}...`;
  }
  return str;
};

const result1 = item1("abcdqdq qrffr wrfwrw rwrfwrwrw rwrwr rtwwrw", 8);
console.log(result1, "j");

// Recursion
let data = [];
const recu = (start, end) => {
  if (start === end) {
    data.push(end);
    return true; // Base case: if start exceeds end, stop the recursion
  } else {
    data.push(start);
    recu(start + 1, end);
  }
  return data;
};

const ites = recu(1, 9);
console.log(ites, "j");
