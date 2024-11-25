// const data = {
//   name: "uhuh",
//   age: "sijfi",
//   add: function (speed, item) {
//     console.log(this.speed);
//     console.log(item);
//   },
// };

// const data2 = {
//   speed: 50,
// };

// const func = data.add.call(data2, 60, 80);
// func();

let a = 10;
let b = 20;

const func = function newdata(a, b) {
  b = a;
  a = b;
  console.log("first");
};
func(a, b);

console.log(a);
console.log(b);
