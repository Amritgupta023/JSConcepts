// Refrence:https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104

const obj = {
    name: 'Joe',
    food: 'cake',
    fullName: {
        firstName: 'amrit',
        lastName: 'gupta'
    }
}
const { name, food } = obj;

console.log(name, food);
// 'Joe' 'cake'

const { name: myName, food: myFood } = obj;

console.log(myName, myFood);
// 'Joe' 'cake'

const { fullName: { firstName: fName, lastName: lName } } = obj;

console.log("firstName", fName, "lastName", lName);


const arr = ['amrit', 'gupta', 'amrit_gupta'];
[, , fullName] = arr;

console.log("fullName", fullName);