//1.Local Storage
localStorage.setItem('name','john');
localStorage.setItem('age',50); //Add

const age = localStorage.getItem('age'); //Get
console.log(age);
localStorage.setItem('name','mosh'); //Update by Overwrite
console.log(localStorage.getItem('name'));

localStorage.removeItem('name'); //Remove
localStorage.clear(); //Clear