const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);
console.log(max);
// 10

function myFunc(...args) {
    console.log(args[0] + args[1]);
}
myFunc(1, 2, 3, 4);
// 3