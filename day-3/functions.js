// hoisting

// var sum2 ko function nhi manta kyuki var hoisting ke time par sirf variable ko upar leke jata h uski value ko nhi.
sum2();
var sum2 = ()=>{
    console.log("hi");   
}



// higher order functions_

// jis function as an argument jata h kisi aur function ke andar usse higher order function khte h
// ya fir jo function return krta h kisi aur function ko usse bhi higher order function khte h

// example_1
function foo() {
    function bar() {
        return 3
    }
    return bar();
       
    function bar(){
        return 8
    }
    return bar();
    
}
console.log(foo());


// example_2
let a=5
function sum(){
    let data=a
    function inner(){
        console.log(data);   
    }
    inner()
}
sum();


// example_3
function sum3(fn) {
    fn();
}
sum3(function inner() {
    console.log("inner");
    
})


// example_4
function outer() {
    function fn() {
        return 3
    }
    return fn;
}
console.log("hello");

console.log(outer());
