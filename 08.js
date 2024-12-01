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
