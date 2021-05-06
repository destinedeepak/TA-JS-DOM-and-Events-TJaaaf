let playerRoot = document.querySelector(".player")
let computerRoot = document.querySelector(".computer")

let DataSet = [
    {
        name:"rock",
        beats:"scissors"
    },
    {
        name:"paper",
        beats:"rock"
    },
    {
        name:"scissors",
        beats:"paper"
    },
]



let player = document.querySelector(".player")
let computer = document.querySelector(".computer")

let playerResult = document.querySelector('.playerResult');
let computerResult = document.querySelector('.computerResult');
let display = document.querySelector('.display');

function randomGenerator(){
   let tempNum = Math.floor(Math.random()*3)
   computer.children[tempNum].children[0].classList.add('black');
   return tempNum;
}

computerResult.innerText= 0;
playerResult.innerText = 0;

function getScore(user, computer){
    console.log(DataSet.indexOf(user), DataSet.indexOf(computer))
    if(user.name === computer.name){
       display.innerText = "It's a tie"
    }
    else if(user.beats === computer.name){
        display.innerText = "You Won!"
        playerResult.innerText = +playerResult.innerText + 1
    }
    else{
        display.innerText = "You Lost!";
        computerResult.innerText = +computerResult.innerText + 1
    }
}

let playerInitialScore = 0, computerInitialScore = 0;
let temp = ""; 

function handler(e){
    
    document.querySelectorAll('i').forEach(ele=>{
        ele.classList.remove('black')
    })
    e.target.classList.add('black')//adding class black

    let computerData = DataSet[randomGenerator()];
    let userData = DataSet[e.target.id];
    
    getScore(userData, computerData)
    
}

player.addEventListener('click', handler);

document.querySelector('.reset').addEventListener('click',function(){
    computerResult.innerText= 0;
    playerResult.innerText = 0;
    display.innerText = "Start...";

    document.querySelectorAll('i').forEach(ele=>{
        ele.classList.remove('black')
    })
})

computerResult.innerText = playerInitialScore;
playerResult.innerText = computerInitialScore;
display.innerText = "Start...";
