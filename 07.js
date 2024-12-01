// Var

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Outputs: 3, 3, 3
  }, 1);
}

// Let

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Outputs: 0, 1, 2
  }, 1000);
}

// CLoser
const closerFunc = () => {
  let num = 10; // You can assign a value to `num`
  return () => {
    num = num + 1;
    console.log(num); // This function forms a closure over the `num` variable
  };
};

const func = closerFunc();
func();
func();
func();
func();
func();
