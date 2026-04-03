

function user(username,age){
    this.username=username
    this.age=age
}

//now if i use new keyword which is constructor call it create new user copy every time it call

const userOne=new user('yash',19)
const userTwo=new user('arushi',23)

console.log(userOne)
console.log(userTwo)

//now we can create our function by using prototype

user.prototype.ageIncrement=function(){
    this.age++;
}

userOne.ageIncrement()
console.log(userOne)
