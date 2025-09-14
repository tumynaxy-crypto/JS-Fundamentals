// 6-multi_languages_loop.js

// Array of strings
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Loop through the array and join the lines with newline characters
let output = "";
for (let i = 0; i < languages.length; i++) {
    output += languages[i] + "\n";
}

// Print all lines using a single console.log
console.log(output.trim());

