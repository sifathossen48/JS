//1.Function Basics
//1.1
function aboutMe(){
    const msg = 'I am John and I am 25 years old';  //Function Declaration
    console.log(msg);  
}

aboutMe();   //Function Call
//1.2
function aboutMe(name,age){
    const msg = `I am ${name} and I am ${age} years old`;  //Function Declaration
    console.log(msg);  
}

aboutMe('John',25);   //Function Call
aboutMe('Smith',24);
aboutMe('Merry',23);

//1.3. Calculate Funtion
function calcSum(num1,num2){
    let sum = num1+num2;
    return sum;
};

let result = calcSum(10,15);
console.log(result);

//2.Default Parameters
//2.1
function addThreeNum(num1,num2,num3=3){  //Default parameter always use in last position
    let sum = num1+num2+num3;
    return sum;
}
console.log(addThreeNum(2,5));
console.log(addThreeNum(2,5,5));
//2.2.
function addThreeNum2(num1,num2=3,num3){  //This is wrong way for default parameter declaration
    let sum = num1+num2+num3;
    return sum;
}
console.log(addThreeNum2(2,5));

//3.Function Expression
const calSum = function(num1,num2){
    let sum = num1+num2;
    return sum;
};

console.log(calSum(22,33));

//4.Arrow Function
//4.1
const sumTwoNum = (num1,num2) => num1+num2;
console.log(sumTwoNum(3,5));

//4.2
const message = (name,age) => `I am ${name} and I am ${age} years old.`;
console.log(message('Jack',25));

//5.Rest Parameters
function multiply (...args){
    console.log(args)
    let mulp = 1;
    for (const num of args) {
        mulp *= num;
    };
    return mulp
};
console.log(multiply(3,4,5,5,5,6,7));

//6.Exercise: Aria of Circle
//Area = PI * r * r [Here r = Redius of Circle.]
//PI = 3.1416

//6.1.By Function Declaration
// function ariaOfCicle(redius){
//     return 3.1416 * redius * redius
// };
// console.log(ariaOfCicle(2));

//6.2.By Function Expression
// const ariaOfCicle = function(redius){
//     return 3.1416 * redius * redius;
// };
// console.log(ariaOfCicle(3));

//6.3.By Arrow Function
// const ariaOfCicle = (redius) => 3.1416 * redius * redius;
// console.log(ariaOfCicle(2));

const ariaOfCicle = (redius) => Math.PI * redius * redius;
console.log(ariaOfCicle(2));

//7.Exercise: Max of Arguments
const maxOfArguments = (...args) =>{
    let maxValue = -1;
    for(let i = 0; i < args.length; i++){
        if(maxValue < args[i]){
            maxValue = args[i];
        };
    };
    return maxValue;
};
let result2 = maxOfArguments(23,25,46,56,100);
console.log(result2);