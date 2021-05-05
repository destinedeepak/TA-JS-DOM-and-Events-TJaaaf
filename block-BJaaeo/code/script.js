result = document.querySelector('.result');

one = document.querySelector('.one');
two = document.querySelector('.two');
three = document.querySelector('.three');
four = document.querySelector('.four');
five = document.querySelector('.five');
six = document.querySelector('.six');
seven = document.querySelector('.seven');
eight = document.querySelector('.eight');
nine = document.querySelector('.nine');
zero = document.querySelector('.zero');
decimal = document.querySelector('.decimal');

add = document.querySelector('.add');
sub = document.querySelector('.sub');
mul = document.querySelector('.mul');
div = document.querySelector('.div');

cancel = document.querySelector('.cancel');
equalBtn = document.querySelector('.equalBtn');

finalResult = "0";

result.innerText = finalResult;

function ensureZero(string){
    if(result.innerText === "0"){
        result.innerText = string
    }else {
        result.innerText = result.innerText + string
    }
}

one.addEventListener('click', function(){
    ensureZero("1")
})
two.addEventListener('click', function(){
    ensureZero("2")
})
three.addEventListener('click', function(){
    ensureZero("3")
})
four.addEventListener('click', function(){
    ensureZero("4")
})
five.addEventListener('click', function(){
    ensureZero("5")
})
six.addEventListener('click', function(){
    ensureZero("6")
})
seven.addEventListener('click', function(){
    ensureZero("7")
})
eight.addEventListener('click', function(){
    ensureZero("8")
})
nine.addEventListener('click', function(){
    ensureZero("9")
})
zero.addEventListener('click', function(){
    ensureZero("0")
})
decimal.addEventListener('click', function(){
    ensureZero(".")
})

add.addEventListener('click', function(){
    ensureZero("+")
})
sub.addEventListener('click', function(){
    ensureZero("-")
})
mul.addEventListener('click', function(){
    ensureZero("*")
})
div.addEventListener('click', function(){
    ensureZero("/")
})

cancel.addEventListener('click', function(){
    result.innerText = "0";
})
equalBtn.addEventListener('click', function(){
    result.innerText = eval(result.innerText);
})
