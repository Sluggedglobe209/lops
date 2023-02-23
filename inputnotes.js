// please install npm

// npm install readline-sync



const readLine = require('readline-sync');

let answer = readLine.question("What day is it?\nYour answer: ");
console.log(answer);
let username = readLine.question("Enter username: ");
let password = readLine.question("Enter password: ");
if (password == "abc"){
    console.log(`Welcome ${username}`);
} else {
    console.log("invalid");
}

let currentPrice = readLine.question("Enter current price: ");
let originalPrice = readLine.question("Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

// Exponents
let base = Number(readLine.question("Enter the base: "));
let exp = Number(readLine.question("Enter the exponent: "));
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} = ${answer2}`);


// Rounding
console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));
const readLine = require('readline-sync');






let answer = readLine.question("Pick a number\nYour number: ");
if (answer % 2 == 0){
    console.log("divisible by  2")
}
else {
    console.log("not divisible by 2")
}
//Other Rounding Methods
console.log(Math.floor(3.5)); //floor always rounds down
console.log(Math.ceil(3.5)); //ceil(ing) always rounds up

const readLine = require(`readline-sync`);

//1
let first = Number(readLine.question("Enter the first: "));
let second = Number(readLine.question("Enter the second: "));
let answer2 = first + second;
console.log
let first = Number(readLine.question("Enter the first: "));
let second = Number(readLine.question("Enter the second: "));
let answer2 = first + second;
console.log                                                                               (`${first} + ${second} = ${answer2}`);
let first = Number(readLine.question("Enter the first: "));
let second = Number(readLine.question("Enter the second: "));
let answer2 = first + second;
console.log                                                                               (`${first} x ${second} = ${answer2}`);
let first = Number(readLine.question("Enter the first: "));
let second = Number(readLine.question("Enter the second: "));
let answer2 = first / second;
console.log                                                                               (`${first} / ${second} = ${answer2}`);
let first = Number(readLine.question("Enter the first: "));
let second = Number(readLine.question("Enter the second: "));
let answer2 = first % second;




console.log                                                                               (`${first} % ${second} = ${answer2}`);



let z = 25;

while (z > 0){

    console.log(z);

    z--;

}



let z = 50;

while (z > 0){

    console.log(z);

    z--;

}

let z = 10;

while (z > -10){

    console.log(z);

    z--;

}
let z = 0;

while (z > -51){

    console.log(z);

    z--;

}
let z = 100;

while (z > 0){

    console.log(z);

    z--;

}
let z = 0;

while (z < 100){

    console.log(z);

    z++;

}
if(start < 10){

    console.log(start);

} else if (start > 25){

    console.log(start);

}

start++;

}

let answer = readLine.question("Enter y or n: ");

while (answer != "y" && answer != "n"){

    console.log("invalid choice");

    answer = readLine.question("Enter y or n: ");

}