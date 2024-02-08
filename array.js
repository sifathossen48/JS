//1.Array Basic
let friends = ['F1','F2','F3'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

//2.Element insert in an array
let numbers = [1,2,3,4,5,9];
//numbers.unshift(5,6,4); //add number in first
//numbers.push(7,8,9); //add number in last
numbers.splice(5,0,6,7,8); //add number in middle
console.log(numbers);

//3.Remove elements in an array
let num = [1,2,3,4,5,6,7,8,9];
//num.shift(); //first element remove
//num.pop(); //last element remove
num.splice(3,4); //middle element remove
console.log(num);

//4.Finding elements in an array
let num2 = [1,2,3,4,5,6,3];

console.log(num2.includes(3,4)); //find element
console.log(num2.indexOf(3)); //find element index number
console.log(num2.lastIndexOf(3)); //find last element index number

//5.Finding Object in Array
const doctors = [
    {name: 'john', age:25},
    {name: 'jack', age:22},
    {name: 'smith', age:18}
];
//5.1
const result = doctors.find(function(doctor){
    return doctor.name === 'john'
});
console.log(result);
//5.2
const result2 = doctors.find(function(doctor){
    return doctor.age > 20
});
console.log(result2);
//5.3
const result3 = doctors.findIndex(function(doctor){
    return doctor.name ==='jack'
});
console.log(result3);

//6.Iterate an Array
let numOfArr = [1,2,3,4,5,6]
//6.1
for (let index=0; index < numOfArr.length; index++){
    console.log(index, numOfArr[index]);
};
//6.2
for (const num of numOfArr) {
    console.log(num);
};
//6.3
numOfArr.forEach((num, index) => console.log(num, index));