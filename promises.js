const Promise = require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1===0){
            reject("First no. is zero")
        }
        resolve(num1+num2)
    })
}

function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1*num2);
    });
}

function division(num1,num2){
    return new Promise((resolve)=>{
        resolve(num1/num2);
    })
}

add(10,20).then((sum)=> {
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product);
    return division(product,100);
}).then((asd)=> console.log(asd) )
.catch((err)=>{
    console.log(err);
})