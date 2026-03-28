//for of 

const word="hello world"

for (const letter of word) {
    if(letter!=" ") console.log("letter is:-",letter)
}

//for of work for map

const myMap=new Map();

myMap.set('IN',"INDIA")
myMap.set('UN',"UNITED NATION")

for (const [key,value] of myMap) {
    console.log(key,':-',value)
}


//for in work for key and value
let arr=[1,2,3,4,5]
for (const key in arr) {
    console.log(`the inde of array is ${key} and value is ${arr[key]}`)
}

