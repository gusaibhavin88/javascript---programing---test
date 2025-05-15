const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("users.csv");
const rl = readline.createInterface({ input: fileStream });

rl.on("line", (line) => {
  const [name, email] = line.split(",");
  // Save to DB
  console.log("Importing:", name, email);
});

rl.on("close", () => {
  console.log("Finished importing users.");
});
