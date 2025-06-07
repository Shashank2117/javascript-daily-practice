// call, bind, apply in javaScript

// method 1 to get full name
let obj = {
    id:1,
    name:"shashank",
    lasName:'kanojiya',
    getFullName:function(num1,num2,num3){
        console.log(this.name, this.lastName, num1, num2, num3); 
    }
}



// but if there are many object we don't need to create functions
// all the time and call them with (obj.function), instead we use (a,b,c)apply,bind,call
let obj2 ={
    id:2,
    name:'rahul',
    lastName:'kumar',
}
// call keyword is to send one 
obj.getFullName.call(obj2,2,3,4,5);
obj.getFullName.apply(obj2, [2,3,4]);
const bind1 = obj.getFullName.bind(obj2, 2,3,4);
bind1();



// Constructors in javaScript
function user(userName,lastName){
    this.userName=userName,
    this.lastName=lastName

} 
let data=     new user("rahul","jain")
let data1=     new user("rohit","jain")

console.log(data);
console.log(data1);