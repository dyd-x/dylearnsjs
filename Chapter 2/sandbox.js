// use let if you know you want to overwrite values.

let food = "chicken nugget";
let year = 2020;
// the variables follow the same as python but
// cannot start with numbers
// do not use reserved key words 
console.log(food, year);

// cannot use let again because you alr created variable
year = 2021;
console.log(year);

// we can use the const key word for constant
// we will not be able to overwrite this value
// cause its a CONSTANT DUH WTF. JESAS.
const points = 100;
// points = 50;
console.log(points);


//this is the older keyword to create variables
var score = 75;
console.log(score)


//strings
console.log('hello world');

let email = 'chicken@mcdelivery.com.sg';
console.log(email);

//string concatenation

let firstName = 'Ding Yang';
let lastName = 'Wan';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let resule = fullName.toLowerCase();
// console.log(result, fullName);

//Math time!

let radius = 10;
const pi = 3.14;

//math operators +,-, *, /, **, %
// order of operation - B I D M A S 
// i mean we learn in python..
console.log(10/2);

let likes = 10;
likes = likes + 1;
// short hand operator for +1
likes++;
likes --;
console.log(likes);

//play with the other operators

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

// console.log(5 / 'hello'); Error
// console.log( 5* 'hello'); Error
// you'll get NaN because you're calculating with a number

//If you are trying to add a string to a number
let result = 'the blog has ' + likes + ' chicken nuggets';
console.log(result);


//template strings
const title = 'Best chicken nuggets';
const creator = 'Macdonalds';
const counted = 20;

//this way to concatenate damn mafan sia wlao
let result3 = "title" + "creator" + likes;

//template string 
let result4 = `The ${title} by ${creator} has ${likes} likes`;
console.log(result4);
// remember its ` not ' or ""

// creating html templates

let html = ` 
    <h2>${title}</h2>
    <p>By ${creator}</p>
    <spam> This blog has ${counted} likes
    `;

//one use case of using template strings

//ARRAY TIME WOOOO FUN FUN FUN FUN
let ninjas = ['Nicolas', 'Danial', 'Arix'];

//overwrite

ninjas[1] = 'May';
console.log(ninjas[1]);

//Will continue more tmr.

