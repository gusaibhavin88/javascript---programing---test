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
