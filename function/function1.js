function myName(username){
    return (`My name is ${username}`);
    
}

console.log(myName("Yash"))

//how to pass different argument in function using single parameter//
//using rest operator//

function calculateCart(...num){
    return num
}

console.log(calculateCart(200,400,550))


const addTwo= (num1,num2) => num1+num2

console.log(addTwo(-4,9))