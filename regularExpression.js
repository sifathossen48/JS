//1.Regular Expression
const regExp = /hello/i;
console.log(regExp.test('Hello World!'));

//2.Regular Expression Object Methods & Modifiers
const regularExp = /there/i;
console.log(regularExp.source);
console.log(regularExp.exec('Hi, Hello There'));

//3.String Method
const rE = /hello/i;
const str = 'Hello World';
const RE = /there/ig;
const str2 = 'Hello There There There';
console.log(str.match(rE));
console.log(str.search(rE));
console.log(str.replace(rE, 'Hi'));
console.log(str2.replace(RE, 'World'));