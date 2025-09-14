// 7-multi_c.js

const arg = process.argv[2];
const times = parseInt(arg, 10);

if (!isNaN(times) && times > 0) {
    for (let i = 0; i < times; i++) {
        console.log("C is fun");
    }
}
// If times is missing, invalid, or <= 0, do nothingx
