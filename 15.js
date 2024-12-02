// Random color

const funcs = () => {
  let data = Math.random().toString(16);
  console.log(data);
  data = data.slice(2, 8);
  return data;
};

const funANs = funcs();
console.log(funANs);

const and = new Set([4, 7, 9, 4, 2, 77, 7, 885, 3, 5, 5]);
console.log(...and);

// convert object to array

let da = {
  name: "eeq",
  age: 32,
};

let tee = Object.entries(da);
console.log(tee);
console.log(tee.flat());

// convert object to array
let items = Object.fromEntries(tee);
console.log(items);
