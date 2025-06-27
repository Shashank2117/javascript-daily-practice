console.log("Tic Tak Toe Game");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-bt");
let winHead = document.querySelector("#win-heading");

let turnX = true;     // for giving turns to Player one and player two alternatively

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log("Box was clicked");
        if(turnX){
            box.innerText="X";
            turnX = false;
        }else{
            box.innerText="O";
            turnX = true;  
        } 
        box.disabled = true;

        checkWinner();
        
    })

})

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner (){
    for (let pattern of winPatterns) {
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner is : " + pos1val);
                document.querySelector('#win-heading').innerText=" Winner is : ";
            }
        }
    }
};

