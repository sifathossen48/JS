//1.Factory Function
function user (name,age){
   const userObj = {
    name,
    age,
    walk: function(){
        console.log(`${this.name} started walk.`)
    },
   };
   return userObj
};
const user1 = user('John', 26);
const user2 = user('Mosh', 25);
console.log(user1,user2);

//2.Constructor Function
function Player(name,age){
    this.name = name
    this.age = age
    this.walk = function(){
        console.log('John is started walk');
    };
}
const player1 = new Player('john',26);
console.log(player1);

//3.Create Home Address by Constructor & Factory Function
//3.1.Home Address by Constructor
function HomeAddress(street,city,zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
};
const homeAddress1 = new HomeAddress('A','B','C');
console.log(homeAddress1);

//4.Builtin Constractors
//4.1.String By Constranctor
let name1 = 'john';
let name2 = new String('john');
console.log(name1);
console.log(name2);

//4.2.Number By Constranctor
let num1 = 25;
let num2 = new Number(25);
console.log(num1);
console.log(num2);

//4.3.Boolean Value By Constranctor
let isvalid1 = true;
let isvalid2 = new Boolean(true);

//4.4.Array By Constranctor
let colors = ['red','green','white'];
let colors1 = new Array('red','green','white');
console.log(colors);
console.log(colors1);

//4.5.Function By Constranctor
function sum1 (number1,number2){
    return number1+number2
}
console.log(sum1(10,20));

const sum2 = new Function('num1','num2','return num1 + num2');
console.log(sum2(12,33));

//4.6.Object By Constranctor
const obj1 = {
    name: 'john',
    age: 45
}
console.log(obj1);

const obj2 = new Object({
    name: 'john',
    age: 45
});
console.log(obj2);