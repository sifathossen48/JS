//1.var vs let
//var = function scope
//let = block scope (recommanded for use)

//2.Array & Object Destructuring
//2.1.Object Destructuring
const user = {
    name: 'john',
    age: 30,
    address: {
        long:90.67,
        lat:23.45
    }
};

function greeting({name,age,address:{long,lat}}){
    console.log(`Hello ${name} (${age}) from ${long},${lat}`);
};
greeting(user);

//2.2.Array Destructuring
let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);

//3.ES6 Data Structure: Set.
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
set2.clear()
console.log(set2);
//Problem: Remove all duplicate numbers.
const num = [10,20,20,30,40,40,50,50,60,70];

console.log([...new Set(num)]);

//4.ES6 Data Structure: Map.
let map = new Map();
map.set('Mango','aam');
map.set('Banana','kola');
map.set('score', 100);

console.log(map);

for (const el of map) {       
    console.log(el);
};

console.log(map.has('Mango'));      //Search in Map

map.delete('Banana');  //Delete from Map
console.log(map);

console.log(map.values());  //Value show
console.log(map.keys());    //Key show
console.log(map.entries());

map.clear()          //Clear data from Map
console.log(map);

//5.Weak Set, Weak Map
//5.1.Weak Set
let ws = new WeakSet();
const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);
console.log(ws);
console.log(ws.has(obj1));
ws.delete(obj1);
console.log(ws.has(obj1));

//5.2.Weak Map
let wm = new WeakMap();
wm.set(obj1, 123);
console.log(wm);
console.log(wm.has(obj1));
console.log(wm.get(obj1));
wm.delete(obj1);
console.log(wm.has(obj1));

//6.ES6 Module
import {addition as add,sub} from "./es6Math.js";
console.log(add(12,55));
console.log(sub(10,5));

//7.padStart, padEnd, trimStart, trimEnd
//7.1.padStart,padEnd
let min = '4';
let hour = '7';

console.log(min.padStart(2,'0'));
console.log(hour.padEnd(4,':00'));

//7.2.trimStart,trimEnd
let name1 = '   john  ';
let name2 = '   jack';
let name3 = 'mosh          ';
name1 = name1.trim();
console.log(name1.length);
name2 = name2.trimStart();
console.log(name2.length);
name3 = name3.trimEnd();
console.log(name3.length);
