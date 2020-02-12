//use loops for CYCLING through data
// we also need to use conditional statements to check for conditions
for (let i = 0; i < 5; i++){
    // statements
    console.log('in loop:', i);
}

console.log('loop finished');

//lets dive deeper

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


//while loop!
let p = 0;
while (p < 3){
    console.log(names[p]);
    p++;
}

let x = 0;
//run regardless of the while loop FIRST
do{
    console.log('val of x is ', x);
    x++;
} while(x < 3);

//if statements
const age = 25;

if (age > 20){
    console.log('you are over 20 years old');;
}

const ninjas = ['nicolas', 'arix', 'danial'];

if (ninjas.length > 4){
    console.log("that's a lot of ninjas");
}

const password = 'p@ssword';

// logical OR || and AND && 
if (password.length >= 12 && password.includes('@')){
    console.log('that password is long enough');
} else if (password.length > 8 || password.includes('@') && password.length >= 5) {
    console.log('this is good enough');
} else{
    console.log('this is not good');
}


//logical NOT(!)
let user = false;

if (user){
}
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);


// break and continue

const scores = [50,25,0,30,100,20,10];

for (i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        // skipped
        continue;
    }
    console.log('your score: ', scores[i]);

    if (scores[i] === 100){
        console.log('wew you hit max');
        //get out of the loop yo
        break;
    }
}

const grade = 'D';

//using if statements

if (grade === 'A'){

}else if (grade === 'B'){
}else if (grade === 'C'){
}else if (grade === 'D'){
}else if (grade === 'E'){
}else if (grade === 'F'){
}
    //cause use else if for each and it gets tiring and looks untidy
// so normally for this we can use switch statements!

//check the value of this variable
switch(grade){
    case 'A':
        console.log('You got an A!');
    case 'B':
        console.log('You got an B!');
    case 'C':
        console.log('You got an C!');
    //it will run and D and everything after that
    //it will run every case after that unless you add a break inside

    case 'D':
        console.log('You got an D!');
    case 'E':
        console.log('You got an E!');
    default:
        console.log('not valid');

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('not valid');
        break;

// variables and block scope
        
}


