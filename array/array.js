const myArr=[1,23,45]

console.log(myArr[0]);
console.log(myArr.at(2))

console.log(myArr.includes(23)) //search

console.log(myArr.reverse()); //reverse the array //original array change
console.log(myArr.toReversed()); //original array not modify

//pop last index remove//

const week =new Array("tuesday","wednesday","thursday","friday")
week.push("saturday")
week.unshift("monday")

console.log(week);

const str=myArr.join()
console.log(str) //arr to string

const nestedArray=[1,2,[3,[4,5]],6]
const w=nestedArray.flat(Infinity);
console.log(w)


//convert to array//

console.log(Array.from("yash12"))

let score1=100;
let score2=200

console.log(Array.of(score1,score2))

let mixArray=[1,2,"hitesh","yash",true]
console.log(mixArray.sort())




/* at=element at specified index
   indexof=index of specified element
   length ,reverse,toReverse,concat,include(search)
   push(push at last of array) , unshift(starting push)
   pop,shift
   flat=return a new array convert all subarray into one
   join =convert arr to string

   //sort convert the array into string and then compare lexigrophically //

   Array.
   from =string to array
   of=many variables or constant to array
   isArray


*/