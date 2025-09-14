// 8-square.js

// Get the first argument
const arg = process.argv[2];

// Convert to integer
const size = parseInt(arg, 10);

// Check if it's a valid positive number
if (!isNaN(size) && size > 0) {
    // Loop to print the square
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
} else {
    console.log("Missing size");
}

