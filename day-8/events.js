// Add Event Listners

let inputJs = document.querySelector('input')
let h1Js = document.querySelector('h1')

inputJs.addEventListener('input', (e)=>{

   // to print on console
    // console.log('hiii');
    // console.log(e.data);
    console.log(e.target.value);
    
   // to print on screen
    h1Js.innerText = e.target.value;    
})



//form on submit

let h3Js = document.querySelector('h3')
let h4Js = document.querySelector('h4')
let h5Js = document.querySelector('h5')


let formJs = document.querySelector('form')
formJs.addEventListener('submit', (e)=>{
    e.preventDefault()

    // console.log('hiii');

    // console.log(formJs[0].value + "  " + formJs[1].value + "  " + formJs[2].value);
    
    let data={
        name:formJs[0].value,
        number:formJs[1].value,
        passWord:formJs[2].value
    }

    localStorage.setItem('key', JSON.stringify(data))
    
    h3Js.innerText = data.name
    h4Js.innerText = data.number
    h5Js.innerText = data.passWord
})
