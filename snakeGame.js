// snake game

let canvas = document.querySelector('canvas')
let snake = canvas.getContext('2d')
let snakeCells = [
    [0,0]
]

let cell = 50
function draw() {
    for (const i of snakeCells) {
        snake.fillRect(i[0],i[1], cell, cell)
    }
}


function update() {
    
    let headX = snakeCells[snakeCells.length-1][0]
    let headY = snakeCells[snakeCells.length-1][1]

    let newX = headX + cell;
    let newY = headY 

    snakeCells.push([newX,newY])
}


setInterval(()=>{
    draw();
    update();
},700)