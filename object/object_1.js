//object literal

const mySym=Symbol("email")
const user={
    name:"yash",
    age:18,
    [mySym]:"yash@2.com"
}

console.log(user);

//how to use function as  a object

user.greet=function(){
    console.log(`my name is ${this.name}` );
    
}

const general=function(){
    console.log(`my age is, ${user.age}`)
}

console.log(user.greet());
console.log(general());

/*

const user2=user
user2.name="aryan"
user2.email="yash@"
console.log(user.name);
console.log(user.email); //yash@ output 
console.log(user2.email);

 
//non primitive (by reference)
*/