﻿// JavaScript code for day 6

// promises

// let promise = new Promise((res,rej)=>{

//     res()
//     // rej()
// })
// console.log(promise);

// example
let promise2 = new Promise((res,rej)=>{

    let isBool = true;

    if(isBool){
        res("successss");
    }else{
        rej("Erorrrrrr");
    }
})

promise2.then((success)=>{
    console.log(success);
    
}).catch((error)=>{
    console.log(error);
    
})
