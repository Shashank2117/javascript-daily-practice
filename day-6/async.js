

setTimeout(()=>{
    console.log("hello");
},1000);


// agar time zero bhi diye h tab bhi asynchronous code humesha baad m hi execute hoga
setTimeout(()=>{
    console.log("byeee");
},0)


console.log("hiii");



// practice question ""

// for let it will work but not for var
for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
        
    },i*1000)
}

// for var we can use
function print(i) {
    setTimeout(()=>{
        console.log(i);       
    },1000*i)
}

for (var i = 0; i <= 5; i++) {
    print(i)
}





// Promises part 2
// async await function

let step1 = function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Select a photo");
            rej("Erorr on photo")
        },3000)
    })
}

let step2 = function(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Filterrrrrr");
            rej("Erorrr on filter")
        },1000)
    })
}

// to avoid call back hell condition, promises is created by developers 

// step1().then((data1)=>{
//     console.log(data1);
//     return step2()
// }).catch((erorr1)=>{
//     console.log(erorr1); 
// }).then((data2)=>{
//     console.log(data2);  
// }).catch((erorr2)=>{
//     console.log(erorr2);  
// })


// async function
async function call(){
   let data1 = await step1()
   console.log(data1);
   
   let data2 = await step2()
   console.log(data2);  
}
call()
