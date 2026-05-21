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

