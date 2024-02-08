//Problem: Find out Duplicate one by Mapping.
const numbers = [1,2,3,4,4,5,5,6];

let mapping = {};

for (let number of numbers){
    if(mapping[number]){
        console.log(number + ' is duplicate');
    }else{
        mapping[number]=true;
    }  
}
//Problem: Find out Duplicate one by Set.
const arr = [1, 2, 3, 4, 5, 6,6, 7, 8, 9, 10];
const set = new Set(arr);
const duplicates = Array.from(set).filter((item) => arr.indexOf(item) !== arr.lastIndexOf(item));
console.log(duplicates);


//ES6 Data Structure Set.
let set2 = new Set();
set2.add(100);
set2.add(200);
set2.add(100);
set2.add(300);
console.log(set2);
console.log(set2.size);
set2.delete(300);
console.log(set2);
console.log(set2.size);

for(let el of set2){
    console.log(el);
}
set2.forEach((el) => console.log(el));

//Problem: Remove all duplicate numbers.
const num = [10,20,20,30,40,40,50,50,60,70];

console.log([...new Set(num)]);

