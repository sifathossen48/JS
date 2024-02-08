//1.Asyc Programming
console.log('Before');
setTimeout(function(){
    console.log('Hello');
},2000);
console.log('After');

//2.Callback
function fetchUser(userID, Callback){
    console.log('Fetch user from database...')
}