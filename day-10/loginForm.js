// Saving info in localstorage 

// for signUp page

let formSignUp = document.querySelector('#signUp')

formSignUp.addEventListener('submit', (e)=>{
    e.preventDefault();

    let userData = {
        name : formSignUp[0].value,
        number : formSignUp[1].value,
        password : formSignUp[2].value
    }
    localStorage.setItem('userData', JSON.stringify(userData))

})

//  for log in page

let formLogIn = document.querySelector('#logIn')

formLogIn.addEventListener('submit', ()=>{
    let number = formLogIn[0].value
    let passWord = formLogIn[1].value

    let data = JSON.parse(localStorage.getItem('userData'))
    if(number == data.number && passWord == data.password){
        prompt("Login Successfully ")
    }else{
        alert("Login Failed ")
    }
})
