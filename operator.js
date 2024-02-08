//Arithmetic Operator
let num1 = 10;
let num2 = 2;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

//Assignment Operator
let num3 = 15;
num3 += 5;
console.log(num3);
num3++; //Encriment
console.log(num3);
num3--; //Decriment
console.log(num3);

//Comparison Operator
// > < >= <= === !==
let price = 100;
console.log(price > 150);
console.log(price < 150);
console.log(price >= 150);
console.log(price <= 150);
console.log(price === 150);
console.log(price !== 100);

//Logical Operator
// and(&&), or(||), not(!)
let mark = 50;
console.log(mark > 25 && mark < 75);
console.log(mark > 25 || mark < 45);
console.log(!(mark > 25));

//Equality Operator
let point = 10;
console.log(point === '10');
console.log(point !== 20);
console.log(point == '10');
console.log(point != 20);

//Problem: Swap two numbers
//a=10, b=20
//After swapping:
//a=20, b=10
let a = 10;
let b = 20;
let temp = a
a = b;
b = temp;
console.log(a,b);