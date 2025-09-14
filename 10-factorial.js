// 10-factorial.js

// Recursive factorial function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Get the first argument and convert to integer
const arg = parseInt(process.argv[2], 10);

// Compute factorial (NaN treated as 1)
const result = isNaN(arg) ? 1 : factorial(arg);

console.log(result);
