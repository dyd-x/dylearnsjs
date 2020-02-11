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

if (password.length >= 8 && password.includes('@')){
    console.log('that password is long enough');
} else{
    console.log('this is damn short sia')
}


//logical NOT(!)

//okay will continue tomorrow
