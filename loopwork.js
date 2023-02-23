const readLine = require(`readline-sync`);




let z = 0;

while (z < 100){

    console.log(z);

    z++;

}
if (start < 10){

    console.log(start);

} else if (start > 25){

    console.log(start);

}

start++;



let answer = readLine.question("Enter y or n: ");

while (answer != "y" && answer != "n"){

    console.log("invalid choice");

    answer = readLine.question("Enter y or n: ");

}
