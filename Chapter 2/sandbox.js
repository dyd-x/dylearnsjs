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
let result2 = fullName.toLowerCase();
console.log(result2, fullName);
// other string methods!
let index = result2.indexOf("i");
let index2 = result2.lastIndexOf("n");
let result5 = result2.slice(4,10);
let result6 = result2.substr(4,10);
// first letter it comes to and replace it.
let result7 = result2.replace("g","p")
console.log(result7);



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

let ages = [20,25,30,35];
console.log(ages[2]);

// this runs as well
let random = ['chicken', 'python', 30, 20];
console.log(random);

//like strings, arrays have properties and methods
console.log(ninjas.length);

let result8 = ninjas.join(',');
let result9 = ninjas.join('-');

let result10 =ninjas.indexOf('Nicolas');
//extend - add more things into the list at the back
let result11 = ninjas.concat(['ethelda', 'eli']);
//push on a new value 
//it alters the original value. its disruptive!
let result12 = ninjas.push('fuxing');
//logging the new LENGTH of the new array lmao why length sia so weird
console.log(result12);
let results13 = ninjas.pop();
//it prints the VALUE that was POPPED OFF.
console.log(results13);


//comparison between Null & Undefined
//setting the variable up but not assigning any value
let age; 
//it will be undefined because there is no value!
console.log(age, age+3, `the age is ${age}`)

//what about null? 
let age2 = null; 
//it will be 3!!! the variable title is equal to null there ewill be times where you need this.
console.log(age2, age2+3, `the age is ${age2}`)


//booleans & comparisons
console.log(true,false, "true", "false");

//methods can return boolean
let chicken2 = "penguin";

let result14 = chicken2.includes('p');
let names = ['mario', 'luigi','bob'];
let result15 =names.includes('luigi');

//comparison operators
let age3 = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 25);
console.log(age >= 25);
console.log(age <= 25);
console.log(age > 25);
console.log(age < 25);


let name = 'ding yang';
console.log(name == 'ding yang');
// lowercase letter is bigger than uppercase letters
console.log(name == 'Ding yang');
//this will be true! because d is bigger than C
console.log(name > 'Cing yang');


//we saw that we can compare different things and we learnt we can use == to compare

//loose comparison vs strict comparison

//loose comparison (different types can still be equal)

console.log(age3 == 25);
console.log(age3 == '25');
console.log( age3 != 25);
console.log( age3 != '25');

//strict comparison (different types cannot be equal)

console.log(age3 === 25); //true
console.log(age3 === '25'); // false
console.log( age3 !== 25); //false
console.log( age3 !== '25'); //true!

//most of the time it is better to use strict comparisons

//type conversion

let score2 = '100';
//convert to number
score = Number(score2);
console.log(score +1);

//how to check type?

console.log(typeof score2);

let result16 = Number('hello');
//will return NaN
console.log(result16);

let result17 = String(5);
//it will return 5 and it will be type string.
console.log(result17, typeof result17);

//We can also convert things to boolean

let result18 = Boolean(100);
//positive values are considered true-y values
// 0 is considered FALSE.
// -0 is considered TRUE.
// negative values are considered false-y values
console.log(result18, typeof result18);

let result19 = Boolean('0');
//Strings of any length is true-y
// but if it is an EMPTY string its false-y
console.log(result19, typeof result19); 