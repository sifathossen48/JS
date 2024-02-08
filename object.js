//JavaScript Object
const user = {
    name:'john',
    age:47,
    hobby:'reading',
};

console.log(user);

//DOT
console.log(user.name);
console.log(user.age);

//BRACKET
console.log(user['hobby']);
console.log(user['age']);

//Object Manipulation
let person = {
    name: 'karim',
    age: 28,
    isMarried: true,
};

//ADD
person.email = 'karim@gmail.com';
person['phone'] = '019999999';

//UPDATE
person.isMarried = false;
person.age = person.age + 5;

//DELETE
delete person.isMarried;

console.log(person);

//Object Method & This Keyword
let member = {
    name: 'rahim',
    age: 28,
    calculateAge: function(){
        console.log(this);
        console.log('I am '+this.age+' years old');
    }
}

member.calculateAge();


//Traversing Object Entries
const users = {
    name:'john',
    age: 47,
    gender: 'male',
    email: 'john@gmail.com',
    phone: '017777',
}

//way 1
for(let key in users){
    console.log(key, users[key]);
}

//way 2
console.log(Object.keys(users));
console.log(Object.values(users));

for(let key of Object.keys(users)){
    console.log(key);
}

for(let val of Object.values(users)){
    console.log(val);
}

//Exercise: Total Salary
const salaries = {
    john: 30000,
    smith: 40000,
    mosh: 45000,
    jack: 50000
};

let sum = 0;

// for (let key in salaries) {
//     console.log(key, salaries[key]);
//     sum += salaries[key];
// };
// console.log(sum)

console.log(Object.values(salaries));
for (let val of Object.values(salaries)) {
    sum+=val;
};
console.log(sum);

//Object Destructuring
// const student = {
//     name: 'john',
//     age: 25,
//     favBook: {
//         name: 'The Programmer',
//         author: 'Mosh Doe'
//     },
// };

// const {name, age, favBook} = student;
// const {name: title, author} = favBook;
// console.log(name);
// console.log(age);
// console.log(title);
// console.log(author);

//Problem : Doctor Object
const docObject = {
    name: 'john',
    designation: 'kidney specialist',
    clinic: {
        name: 'Happy Care',
        address: {
            long: 90.77,
            lat: 34.56,
        },
    },
    operation: function(){
        console.log(`${this.name} started doing operation.`);
    }
};
docObject.operation();

const {name, designation, clinic:{name: clinicName, address:{long, lat}}} = docObject;
console.log(name);
console.log(designation);
console.log(clinicName);
console.log(long);
console.log(lat);

for (const prop in docObject) {
    console.log(prop, docObject[prop]);
}

//Cloning Object
const player = {
    name: 'john',
    age: 35,
}
//Cloning Object by Empty Object
//const copiedPlayer = {};
//way 1
// copiedPlayer.name = player.name;
// copiedPlayer.age = player.age;
// console.log(copiedPlayer);

//way 2
// for (const key in player) {
//     console.log(key, player[key]);
//     copiedPlayer[key] = player[key]; 
// };
// console.log(copiedPlayer);

//Cloning Object by assign method
// const copiedPlayer = Object.assign({}, player);
// console.log(copiedPlayer);

const copiedPlayer = {...player};
console.log(copiedPlayer);

//Math Object
//See the documentation

//JSON
const book = {
    title: 'Coder',
    page: 235,
};
const jsonData = JSON.stringify(book);
console.log(jsonData);
console.log(JSON.parse(jsonData));