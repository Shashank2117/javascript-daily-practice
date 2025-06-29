﻿// JavaScript code for day 7

// Document Object Model


let oneJs = document.getElementById('one')
console.log(oneJs);

let tagJs = document.getElementsByTagName('h1')
console.log(tagJs);

// jab class ko select krte h getelementsbyclassname se to fir usme directly ye neeche vali
// properties nhi laga skte kyuki class ek array ko return krti h (HTML collection)

let twoJs = document.getElementsByClassName('two')
console.log(twoJs);

oneJs.innerHTML = "hiii"
console.log(oneJs.innerText);
console.log(oneJs.innerHTML);


let oneJs = document.querySelector('#one')
console.log(oneJs);

let twoJs = document.querySelector('.two')       // by default uss class name ka jo bhi phla element hoga vo aayega
console.log(twoJs);

let twoJs = document.querySelectorAll('.two')
console.log(twoJs);


let aJs = document.querySelector('a')
console.log(aJs.getAttribute('href'));

aJs.setAttribute('href', 'https://flipkart.com')
console.log(aJs.getAttribute('href'));


let h1Js = document.createElement('h1')
h1Js.innerText = "Helloooo"
let divJS = document.querySelector('div')
divJS.append(h1Js)
console.log(divJS);

