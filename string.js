//String Basics
let country = 'Bangladesh';
console.log(country);
console.log(typeof country);
console.log(country[9]);
console.log(country[10]);
console.log(country.charAt(10));
console.log(country.length);

//String Methods
let msg = 'I love my country and love my home';
console.log(msg.charAt(5));
console.log(msg.charCodeAt(5));
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.includes('love', 2));
console.log(msg.startsWith('love', 2));
console.log(msg.endsWith('love', 6));
console.log(msg.search('love'));
console.log(msg.indexOf('love', 6));
console.log(msg.lastIndexOf('love', 6));
console.log(msg.split(" "));
console.log(msg.slice(0,6));
console.log(msg.substring(0,6));
console.log(msg.substr(0,10));
//toString,concat 

//String Immutability
let message = 'Jello World';
message = message + ' Hi there';
console.log(message);