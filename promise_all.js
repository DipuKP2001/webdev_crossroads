const { reject } = require('promise')
const Promise = require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Nikhil')
        },2000)
    })
}

function getMobileNo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('235696325')
        },3000)
    })
}

// Promise.all([getName(),getMobileNo()]).then((result)=>{
//     console.log(result);
// })

async function getUser(){
    let name = await getName()
    console.log(name)
    let mobileNo = await getMobileNo()
    console.log(mobileNo)
}

getUser()