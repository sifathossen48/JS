//For Loop
for(let num=1; num<=3; num++){ //encriment
    console.log('Hello World',num);
}
for(let num=3; num>=1; num--){ //decriment
    console.log('Bye World',num);
}

//While Loop
let index = 1;
while(index<=3){
    console.log('Hello World',index);
    index++;
}
console.log(index);

//Do While Loop
let number = 1
do {
    console.log('Hi, How are you?',number);
    number++
}while(number<=5)
console.log(number);

//For....in
const obj ={
    name: 'john',  //object
    age: 40,
};

for(let key in obj){
    console.log(key, obj[key]);
}

let num = [1,2,3,4,5];
console.log(num);        //array

for(let index in num){
    console.log(index, num[index]);
}

//For....of
let numbers = [1,2,3,4,5,6];

for(let num of numbers){
    console.log(num);
}

//Break & Continue
for(let index = 1; index <= 20; index++){
    console.log(index); //break
    if(index===10){
        break;
    }
}

for(let index = 1; index <= 20; index++){
    if(index % 2 === 1){  //continue
        continue;
    }
    console.log(index);
}

//Infinite Loop
//If we don't define encrement or conditional logic properly in loop that called Infinite Loop.
for(let num=1; num<=3; num++){ //encriment
    console.log('Hello World',num);
}


//Nasted Loop
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        console.log(i,j);
    }
}

//Problem: Print Even Odd Numbers
// for(let index=1; index <= 10; index++){
//     if(index % 2 === 1){
//         console.log( index+' is odd number');
//     }else{
//         console.log( index+' is even number');
//     }
// }

for(let index=1; index <= 10; index+=2){
    console.log( index+' is odd number');
}
for(let index=2; index <= 10; index+=2){
    console.log( index+' is even number');
}

//Problem: Sum of all numbers in an array
let n = [10,20,30,40,50];
let sum = 0;

for(let index = 0; index < n.length; index++){
    sum+=n[index];
}
console.log(sum);

//Problem: Check Prime Number
let num1 = 7 ;
let isPrime = true;
for(let i = 2; i <= num1 - 1; i++){
    if(num1 % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime) console.log('This is a prime number');
else console.log('This is a not prime number');

//#
for(let num = 10; num <= 100; num++){
    let isPrime = true;
    for(let i = 2; i <= num - 1; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) console.log(num);

}