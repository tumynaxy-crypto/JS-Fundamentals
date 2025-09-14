// 5-to_integer.js

// Get the first argument
const arg = process.argv[2];

// Check if the argument exists and can be converted to an integer
if (arg && !isNaN(parseInt(arg, 10))) {
    const num = parseInt(arg, 10);
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
