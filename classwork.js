// 1.) Create a function that test if someone is an adult. if they are 35 apply a 10% increase on whatever balance they have. if they are 45, 15%. if they are 50 or older they get a 30% on the interest.
let master = function(age, balance) {
    
    if (age < 18) {
        return "Not an adult"; 
    }
    if (age === 35) {
        balance = balance +(balance *10/100)
    } else if (age === 45) {
        balance = balance * 1.15; 
    
        balance = balance * 1.30; 
    } else {    
        balance = balance * 1.00; 
    }

    return balance;
}
console.log(master(35,500));

// 2.) Create a function that takes another function as a param.(You have to create a function named {get balance} that function must be passed as a param to another one )



// 3)Create a function that constanly adds the values of a group of objects and returns the total.

// Create nested user objects that you will apply this to, user EG.


// Create 4 functions that are respectively named divide, add,subtract,multiply; These functions must all be applicable to the user(s) values on balance.

 let users ={ user1:{"userdetails":
    { "name":"Master",
    "surname":"Masso"},
    "account":{acc_type:"savings",
    "balance":2000,
    "date":today=new Date()}},

    "user2":{ "userdetails":
     {"name":"gerald",
    "surname":"kapurura"},
    "account":{acc_type:"savings",
    "balance":1000,
    "date":today=new Date()}}};
 console.log(users.user1.account.balance);
function add (value){
return users.user1.account.balance + value } 
 
function divide (value){
return users.user1.account.balance / value};

function multiply (value){
return users.user1.account.balance * value};

function subtract (value){
return users.user1.account.balance - value};
  
console.log( average(2)); 

//  Create a function that takes users values and generates and average for all the users

function gen_avg (){

let average = (user1 + user2) /2 

  
}