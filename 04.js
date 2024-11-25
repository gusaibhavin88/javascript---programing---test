const hashTag = (str) => {
  str = str.split(" ");
  str = str.map((item) => item.replace(item[0], item[0].toUpperCase()));
  //   str = str.map((item) => item[0].toUpperCase() + item.slice(1));
  return `#${str.join("")}`;
};

const data = hashTag("test hello word");
console.log(data);

const finCount = (str, word) => {
  let count = 0;

  //   str.split("").forEach((element) => {
  //     if (element.toLowerCase() === word.toLowerCase()) {
  //       count++;
  //     }
  //   });
  //   return count;

  return str.split("").reduce((acc, char) => {
    if (char.toLowerCase() === word.toLowerCase()) acc++;
    return acc;
  }, 0);
};
const item = finCount("dwudIhiahc", "i");
console.log(item, "kyuy");
