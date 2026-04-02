const PromiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
         console.log('async happened')
         resolve()
    },1000)
})


PromiseOne.then(function(){
    console.log('promise consumed')
})


const PromiseTwo=new Promise(function(resolve,reject){
    setTimeout(()=>{
         resolve({username:'yash',email:'yash@12'})
    },1000)
})


PromiseTwo.then(function(user){
    console.log(user)
    return user.username
})

.then((username)=>{
    console.log(username)
})


