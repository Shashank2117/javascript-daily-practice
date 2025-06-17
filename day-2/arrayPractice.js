// Q1 Convert an array of temperatures in Celsius to Fahrenheit.
//    Input: [0, 20, 30]
//    Output: [32, 68, 86]

// formula f = (c*9/5) + 32
let arr1 = [0, 20, 30];
let arr2 = [];

arr1.forEach((i) => {
    arr2.push((i * 9/5) + 32);
});
console.log(arr2);

// _____________________________________________________________


// Q2 Extract only the first letter from each word.
//    Input: ["apple", "banana", "cherry"]
//    Output: ["a", "b", "c"]

let arr3 = ["apple", "banana", "cherry"];
let firstLetter = arr3.map((fruit)=>{
   return fruit.charAt(0);

})
console.log(firstLetter);

// ____________________________________________________________

// Q3  Create an array of string lengths.
//    Input: ["hello", "world", "map"]
//    Output: [5, 5, 3]

let arr4 = ["hello", "World", "map"];
let arr5 = arr4.map((element)=>{
    return element.length;

})
console.log(arr5);

// ___________________________________________________________

// Q4 Filter out prime numbers.
//    Input: [2, 3, 4, 5, 6, 7]
//    Output: [2, 3, 5, 7]



// _____________________________________________________________

// Q5 Filter names that start with 'A' or 'a'.
//    Input: ["Alice", "bob", "Ankit", "charlie"]
//    Output: ["Alice", "Ankit"]

let arr6 = ["Alice", "bob", "ankit", "charlie"];
let arr7 = [];

for (let i = 0; i < arr6.length; i++) {
    if(arr6[i].charAt(0) === "A" || arr6[i].charAt(0) === "a"){
        arr7.push(arr6[i])
    }  
}
console.log(arr7);

// ______________________________________________________________

// Q6 Filter even length words.
//    Input: ["one", "three", "four", "five"]
//    Output: ["four", "five"]

let arr8 = ["one", "three", "four", "five"];

let arr9 = arr8.filter((element)=>{
    if(element.length % 2 == 0){
        return element;
    }
})
console.log(arr9);

// _____________________________________________________________

// Q7 Create a frequency count of characters.
//    Input: ["a", "b", "a", "c", "b"]
//    Output: {a: 2, b: 2, c: 1}

// ______________________________________________________________

// Q8 Concatenate all strings in array into a sentence.
//    Input: ["Hello", "world", "from", "reduce"]
//    Output: "Hello world from reduce"

let arr10 = ["Hello", "world", "from", 'reduce'];
let arr11 = arr10.reduce((a,b)=>{
    return a = a + " " + b;
    
})
console.log(arr11);

// _____________________________________________________________

// Q9 Find the average of all numbers.
//    Input: [10, 20, 30]
//    Output: 20

let arr12 = [10, 20, 30];
let sum = 0;
let count = 0;

arr12.forEach((element)=>{
    sum += element;
    count++
})
const avg = sum / count;
console.log(avg + " is average of numbers");

// ____________________________________________________________

// Q10 Count total vowels in all words.
//     Input: ["apple", "banana"]
//     Output: 5

let arr13 = ["apple", "banana"];

let vovel = 0;
for (let i = 0; i < arr13.length; i++) {
    for (let j = 0; j < arr13[i].length; j++) {
        let ch = arr13[i].charAt(j).toLowerCase();
        if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ){
        vovel++
        }      
    } 
}
console.log("number of vovels are " + vovel);
