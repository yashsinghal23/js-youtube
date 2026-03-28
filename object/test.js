const mySym= Symbol("key1")
const user={
    name:"yash",
    email:"yash@gmail.com",
    age:18,
    [mySym]:"symbol"
}

console.log(user);

Object.freeze(user)

user.istrue=false;
console.log(user);

console.log(Object.hasOwn(user,"nam"));

//destructre the object//

const {age:a}=user
console.log(a)