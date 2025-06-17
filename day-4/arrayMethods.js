// .forEach and and .map methods in array
let arr = [1,2,3,4,5,6,7,8];

let data = arr.forEach((a,b,c)=>{
    console.log(a + " value of arr");
    console.log(b + " index value");
    console.log(c);   // yaha par puri array aayegi utni baar jitni value us array me hogi
})
// dosent return anything in forEach method


let data2 = arr.map((a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c); 
})

console.log(data2 == arr);    //false because data1 contains new array address (new array created from Map method)


let arr2=[1,2,3,4,5,6,7,8]
    
     let sum=   arr2.reduce((a,b,c,d)=>{
        return a+b     

     },10)
     console.log(sum);



// To find the maximum element in the array
     let arr3=[1,2,3,4,5,6,7,8,4,5,6,2,1]
    
     let data3 = arr.reduce((a,b)=>{
        return a>b ? a:b   

     })
     console.log(data3);




 // practice question to find sum of even numbers that is greater than 3
    let arr4 = [2,3,2,3,42,4,32,5,2,5,7];
// >3
    let grt3 = arr4.filter((a)=>{
        return a > 3
    })
    console.log(grt3);
// even
    let even = grt3.filter((a)=>{
        if(a % 2 === 0){
            return a
        }
    })
    console.log(even);
// sum
    let sumAll = even.reduce((a,b)=>{
        return a + b;
    })
    console.log(sumAll);

