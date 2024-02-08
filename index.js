
//JS Objects
let name = 'john';
let age = 25;
let hobby = 'reading';


let User = {
    name: 'john',
    age: 25,
    hobby: 'reading'
};
console.log(User);
console.log(User.name);

//JS Array
let friends = ['john','merry','smith'];
console.log(friends);

console.log(friends[1]);
console.log(typeof friends);
console.log(friends.length);

//JS Function
function showMyName(){
    console.log('My name is John');
}
showMyName();

function MyName(name){
    console.log('My name is '+name);
}
MyName('Smith');
MyName('Jack')

function calcSum(num1,num2){
    const sum = num1+num2;
    return sum;
}

//console.log(calcSum(15,35));
const result = calcSum(15,35);
console.log(result);

//Template Literals
let country = 'Bangladesh';
console.log('My country name is ${country}');
console.log('${2+3}');

//Exercise--Person Object
let person = {
    personName: 'john',
    age: 47,
    isMarried: true,
    homeAddress: {
        long: 83.33,
        let: 24.44,
    },
    friends:['jeck','merry','smith'], 
};

console.log(person);
console.log(person.personName);
console.log(person.homeAddress.long);
console.log(person.friends[0]);
