//Eval

var x = 10;
var y = 20;
var codeToExecute = "x + y"; // This is a string containing JavaScript code.
console.log(codeToExecute);
var result = eval(codeToExecute);
console.log(result); // This will output 30

// isNan
var result2 = isNaN(x);
console.log(result2); // This will output 30

//isFinite

function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."

//
