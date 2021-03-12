//Map
const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(el => el + 20);
console.log("mapped", mapped);

//filtered
const arr1 = [1, 2, 3, 4, 5, 6];
const filtered = arr1.filter((el) => {
    if (el % 2 == 0) {
        return el;
    }
});
console.log("filtered", filtered);

//reduce
const arr2 = [1, 2, 3, 4, 5, 6];
// const reduced = arr2.reduce((total, current) => total + current);
// console.log(reduced);
// 21

const reduced = arr2.reduce((sum, el) => sum + el);
console.log("reduced", reduced);


// find, findIndex, indexOf

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);
console.log(found);

const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr.findIndex(el => el === 'Frank');
console.log(foundIndex);

const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr.indexOf('Frank');
console.log(foundIndex);
// 1

// push, pop, shift, unshift

let arr = [1, 2, 3, 4];
const pushed = arr.push(5);
console.log(arr);
// [1, 2, 3, 4, 5]
console.log(pushed);
// 5

let arr = [1, 2, 3, 4];
const popped = arr.pop();
console.log(arr);
// [1, 2, 3]
console.log(popped);
// 4

let arr = [1, 2, 3, 4];
const shifted = arr.shift();
console.log(arr);
// [2, 3, 4]
console.log(shifted);
// 1


let arr = [1, 2, 3, 4];
const unshifted = arr.unshift(5, 6, 7);
console.log(arr);
// [5, 6, 7, 1, 2, 3, 4]
console.log(unshifted);
// 7


// splice, slice

let arr = ['a', 'c', 'd', 'e'];
arr.splice(1, 0, 'b')

let arr = ['a', 'b', 'c', 'd', 'e'];
const sliced = arr.slice(2, 4);

console.log(sliced);
// ['c', 'd']
console.log(arr);
// ['a', 'b', 'c', 'd', 'e']


// sort

let arr = [1, 7, 3, -1, 5, 7, 2];
const sorter = (firstEl, secondEl) => firstEl - secondEl;
arr.sort(sorter);
console.log(arr);
// [-1, 1, 2, 3, 5, 7, 7]

