// Dyas Gap

const gap = (day, day2) => {
  const d1 = new Date(day);
  const d2 = new Date(day2);

  return Math.abs(d1 - d2) / (24 * 60 * 60 * 1000);
};

const gapAns = gap("2024-12-12", "2024-12-19");
console.log(gapAns);

// Find Age

const gap1 = (day) => {
  const birth = new Date(day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  console.log(age, "kui");
};

const gapAns1 = gap1("1997-03-12");
console.log(gap1);

// Add start

const gap2 = (array) => {
  let str = "";
  array.forEach((item) => {
    let count = 0;
    while (count < item) {
      str = str + "*";
      count++;
    }
    str += " ";
  });

  return str;
};

const gapAns2 = gap2([3, 5, 7]);
console.log(gapAns2);
