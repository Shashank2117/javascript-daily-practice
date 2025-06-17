// Assignment

// let arr = [
//     'https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D'
// ]

// const imageJs =  document.querySelector('img')

// let num = 0;

// setInterval(()=>{
//     imageJs.setAttribute('src', arr[num])
//     num = (num + 1) % arr.length;
// },2000);





// Event Listners

// // function is created here but called at inline Btn
// function fun1(){
//     console.log("Hiii Inline event");
    
// }

// // function is created and called both at js as event
// let btnJs = document.querySelector('#eventBtn');
// btnJs.onclick = function () {
//     console.log("hello JS event");
// }



// // Another method {add event listners}

// let btn = document.querySelector('#eventBtn');

// btn.addEventListener('click',()=>{
//      console.log('hiiii');
     
// })




// switching bright to dark mode

let color = true;
let modeJs = document.querySelector('#mode');
modeJs.addEventListener('click', ()=>{
    if(color){
    document.body.style.backgroundColor="red"
    }else{
        document.body.style.backgroundColor="green"
    }
    color = !color;
})