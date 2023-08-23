
// Example 1: Array 

var date = [2023, 8, 24];
// var year = date[0], month = date[1], day = date[2];

// destructuring
var [year, , day] = date;

console.log("year: " + year);
// console.log("month: " + month);
console.log("day: " + day);

// Example 2: Object
var person  = {
    firstName: 'John',
    lastName: 'Doe',
    age: 36,
};

// destructuring
var {firstName: f, age: a} = person;
// var f = person.firstName, a = person.age;
console.log("firstName: " + f);
console.log("age: " + a);