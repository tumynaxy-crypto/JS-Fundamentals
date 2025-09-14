// 7-multi_c.js

// Get the first argument
const arg = process.argv[2];

// Convert to integer
const times = parseInt(arg, 10);

// Check if the argument is a valid positive number
if (!isNaN(times) && times > 0) {
    for (let i = 0; i < times; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}
