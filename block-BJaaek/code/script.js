boxFirst = document.querySelector('.first');
boxSecond = document.querySelector('.second');

boxFirst.addEventListener("click",function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  boxFirst.style.backgroundColor = "#" + randomColor;
})

boxSecond.addEventListener("mousemove",function(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
boxSecond.style.backgroundColor = "#" + randomColor;
})