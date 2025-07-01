// snake game

let canvas = document.querySelector('canvas')
let snake = canvas.getContext('2d')
let snakeCells = [  [0,0]  ]
let cell = 50
let direction = 'right'
let gameOver = false;



let id = setInterval(()=>{
    draw();
    update();
},300)




document.addEventListener("keydown", (e)=>{
    // console.log(e);
    if(e.key === 'ArrowUp'){
        direction = 'up'
    }else if(e.key === "ArrowDown"){
        direction = 'down'
    }else if(e.key === 'ArrowLeft'){
        direction = 'left'
    }else{
        direction = 'right'
    }
})




function draw() {
    if(gameOver == true){
        clearInterval(id)
        return;
    }

    snake.clearRect(0, 0, 600, 450)
    for (const i of snakeCells) {
        snake.fillRect(i[0],i[1], cell, cell)
    }
}




function update() {   
    let headX = snakeCells[snakeCells.length-1][0]
    let headY = snakeCells[snakeCells.length-1][1]

    let newX;
    let newY;

    if(direction == "right"){
        newX = headX + cell;
        newY = headY;
        if(newX == 600){
            gameOver = true;        
        }
    }else if(direction == "left"){
        newX = headX - cell;
        newY = headY
        if(newX < 0){
            gameOver = true;
        }
    }else if(direction == "up"){
        newX = headX;
        newY = headY - cell;
        if(newY < 0){
            gameOver = true;
        }
    }else{
        newX = headX;
        newY = headY + cell;
        if(newY == 450){
            gameOver = true;
        }
    }
    snakeCells.push([newX,newY])
    snakeCells.shift();
}

