// Get the arguments passed to the script (excluding 'node' and the script name)
const args = process.argv.slice(2);

// Check if the first argument exists
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
x
