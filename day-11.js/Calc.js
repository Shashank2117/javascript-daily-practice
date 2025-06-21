// Calculator

let num = document.querySelectorAll(".num")
let outputDiv = document.querySelector('#output-div')

let str = ""

num.forEach((button)=>{

    button.addEventListener('click', ()=>{
        // str += button.innerText;
        let value = button.innerText;
        // outputDiv.innerText = str;

        // for AC (all clear)
        if(button == num[3]){
            str = "";
            outputDiv.innerText="";
            return;
        }

        // for = operator
        if(value === "="){
            try{
                str = eval(str);
                outputDiv.innerText = str;
            }catch(e){
                outputDiv.innerText = "Error";
                str = "";
            }
            return;
        }

        // Append number/operator
        str += value;
        outputDiv.innerText = str;
    })

})
