// Separate Numbers
const data = (str) => {
  const array = [];
  let string = "";

  str.split("").forEach((element) => {
    if (!isNaN(element)) {
      string += element;
    } else {
      if (string) {
        array.push(string);
        string = "";
      }
    }
  });

  if (string) {
    array.push(string);
  }

  return array;
};

const result = data("jn97977wf424242gg353g522");
console.log(result);
