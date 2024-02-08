//If_Else_Statement
let number = 10;
if(number > 0){
    console.log('This is a positive number');
} else if (number < 0) {
    console.log('This is a negative number');
} else {
    console.log('This is a zero')
}

//Switch_Case
let color = 'lemon';

switch(color){
    case 'red':
        console.log('This is red')
        break;
    case 'green':
        console.log('This is green')
        break;
    case 'black':
        console.log('This is black')
        break;
    default:
        console.log('This is not a valid color')
}

//Ternary Operator
let num1 = 10;
let num2 = 20;
let maxValue;

if(num1>num2) maxValue=num1; //if_else
else maxValue = num2;
console.log(maxValue);

let max = num1>num2 ? num1 : num2; //Ternery Operator
console.log(max);

let num = 25;
console.log(num % 2 === 0 ? 'even':'odd')


//Problem: FizzBuzz with if_else
let n = 15;
if(n % 3 === 0 && n % 5 === 0){
    console.log('FizzBuzz');
}else if (n%3===0){
    console.log('Fizz');
}else if(n%5===0){
    console.log('Buzz');
}else{
    console.log('Nothing!');
}

//Problem: FizzBuzz with Ternary Operator
console.log((n % 3 === 0 && n % 5 === 0)?'FizzBuzz': (n%3===0)?'Fizz': (n%5===0)?'Buzz':'Nothing!');

//Problem: Leap Year Check
let year = 2006;
if(year%400===0){
    console.log('This year is Leap Year');
}else if(year%4===0 && year%100!==0){
    console.log('This year is Leap Year');
}else{
    console.log('This year is not Leap Year');
}

//Problem: Grading System
let mark = 85;
if(mark<0 || mark>100){
    console.log('invalid marks');
}else if(mark>=80 && mark<=100){
    console.log('A+')
}else if(mark>=80 && mark<=100){
    console.log('A+')
}else if(mark>=80 && mark<=100){
    console.log('A+')
}else if(mark>=80 && mark<=100){
    console.log('A+')
}else if(mark>=80 && mark<=100){
    console.log('A+')
}else{

}

//Switch Case with multiple logical operators
let m = 10;

switch(true){
    case m > 0:
        console.log('positive');
        break;
    case m === 0:
        console.log('zero');
        break;
    case m < 0:
        console.log('negative');
        break;
}