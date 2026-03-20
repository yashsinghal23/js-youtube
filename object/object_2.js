const user1={
    name1:"yash",
    age1:18
}

const user2={
    name:"arushi",
    age:24
}
 
const user3=Object.assign(user1,user2)
console.log(user3) //for object contaenation
console.log(Object.keys(user3)) //for all key in array

console.log(Object.values(user3)) //for all values in array
Object.freeze(user2)
//for no change can be done in object//



