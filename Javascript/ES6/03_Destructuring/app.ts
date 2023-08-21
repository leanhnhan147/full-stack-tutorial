
// Example 1: Array 
var date: number[] = [2020, 12, 8];

// destructuring
var [year, , day] = date;

console.log("year: " + year);
console.log("day: " + day);

// Example 2: Object
var person  = {
    firstName: 'John',
    lastName: 'Doe',
    age: 36,
};

// destructuring
var {firstName: f, age: a} = person;

console.log("firstName: " + f);
console.log("age: " + a);