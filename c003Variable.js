//JavaScript’s five primitive type (i.e., Boolean, null, undefined, String, and Number)

//Value vs. Reference Variable Assignment

//JavaScript always assigns variables by value. 
// But this part is very important: when the assigned value is one of 
// JavaScript’s five primitive type (i.e., Boolean, null, undefined, String, and Number) 
// the actual value is assigned. However, when the assigned value is an Array, Function, 
// or Object a reference to the object in memory is assigned.


let var1 = 'My string';
let var2 = var1;

var2 = 'My new string';

console.log(var1);
// 'My string'
console.log(var2);
// 'My new string'



let var3 = { name: 'Jim' }
let var4 = var3;

var4.name = 'John';

console.log(var3);
// { name: 'John' }
console.log(var4);
// { name: 'John' }