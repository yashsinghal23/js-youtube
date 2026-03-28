
/**
 (function chai(){
    console.log("hostel")
}) ()                           give error because of semicolon

(function you(){
    console.log("mnit")
})()
 */


(function chai(){
    console.log("hostel")
}) ();

(function you(){
    console.log("mnit")
})();


// use of arrow function

( (name)=> {
    console.log(`my name is ${name}`);
})('Yash')


//iife 

