let player = document.querySelector(".player")
let computer = document.querySelector(".computer")

let playerResult = document.querySelector('.playerResult');
let computerResult = document.querySelector('.computerResult');
let result = document.querySelector('.finalResult');

function randomGenerator(){
   let tempNum = Math.floor(Math.random()*3)
   computer.children[tempNum].children[0].classList.add('black');
   return computer.children[tempNum].className;
}

let playerInitialScore = 0, computerInitialScore = 0;
let temp = ""; 

function handler(e){
    document.querySelectorAll('i').forEach(ele=>{
        ele.classList.remove('black')
    })
    e.target.classList.add('black')
    let computerReturn = randomGenerator();
    if(e.target.classList.contains('fa-hand-rock-o')){

        if(computerReturn === "computerPaper"){
           computerResult.innerText = ++computerInitialScore ;
           result.innerText = "You Lost!"
        }else if(computerReturn === "computerScissor"){
           playerResult.innerText = ++playerInitialScore ;
           result.innerText = "You Won!"
        }else if(computerReturn === "computerRock"){
            result.innerText = "It's a tie."
        }
    }
    
    if(e.target.classList.contains('fa-hand-paper-o')){

        if(computerReturn === "computerPaper"){
           result.innerText = "It's a tie."
        }else if(computerReturn === "computerScissor"){
            computerResult.innerText = ++computerInitialScore ;
            result.innerText = "You Lost!"
        }else if(computerReturn === "computerRock"){
            playerResult.innerText = ++playerInitialScore ;
           result.innerText = "You Won!"
        }
    }

    if(e.target.classList.contains('fa-hand-scissors-o')){

        if(computerReturn === "computerPaper"){
           playerResult.innerText = ++playerInitialScore ;
           result.innerText = "You Won!"
        }else if(computerReturn === "computerScissor"){
           result.innerText = "It's a tie."
        }else if(computerReturn === "computerRock"){
           computerResult.innerText = ++computerInitialScore ;
           result.innerText = "You Lost!"
        }
    }
}
player.addEventListener('click', handler)

document.querySelector('.reset').addEventListener('click',function(){
    computerResult.innerText= 0;
    playerResult.innerText = 0;
    result.innerText = "Start...";

    document.querySelectorAll('i').forEach(ele=>{
        ele.classList.remove('black')
    })
})

computerResult.innerText = playerInitialScore;
playerResult.innerText = computerInitialScore;
result.innerText = "Start...";
