let a="Yash"
let b=70

console.log(`my name is ${a} and my weight is ${b}`);

let str=new String("world map")

console.log(str[0]);
console.log(str[5]);
console.log(str.length); 
console.log(str.charAt(8)); // find charcacter at that index
console.log(str.indexOf('m')) // find index of char

console.log(str.toLocaleUpperCase()) //to uppercase

//substring
let anotherstr=str.substring(0,4)
console.log(anotherstr[3]);
console.log(anotherstr.toUpperCase())

/**
 slice is used to extract substring but negative charcter allowed 
 str.slice(-5) start from 5 char of string to end
 */


//trim
let abc= " world map " //rempve trailing and leading whitepace 
console.log(abc.trim())

let v="hello! how's it going?"
const regex=/[^\w\s']/g

console.log(v.replace(regex,""))

//split

let bc="yash is a good boy"
let strbc=bc.split(" ")
console.log(strbc);



