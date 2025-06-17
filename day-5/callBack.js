//call back hell

function step1(fn) {
    setTimeout(()=>{
        console.log("Select photo");
        fn()
    },4000)
}

function step2(fn2) {
    setTimeout(()=>{
        console.log("filterrr");
        fn()
    },3000)
}

function step3(fn3) {
    setTimeout(()=>{
        console.log("captionsss");
        fn()
    },2000)
}

function step4(fn4) {
    setTimeout(()=>{
        console.log("postttt");
        fn()
    },1000)
}

// generally we call like this
// step1();
// step2();
// step3();
// step4();


// call back hell example :-
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})
