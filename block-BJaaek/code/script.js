boxFirst = document.querySelector('.first');
boxSecond = document.querySelector('.second');

function generateRandomColor(){
   let tempArray = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
   let color = "#"
   for(i=0; i<6; i++){
     color += tempArray[Math.floor(Math.random() * 16)]
   }
   return color;
}

boxFirst.addEventListener("click",function(){
  boxFirst.style.backgroundColor = generateRandomColor();
})

boxSecond.addEventListener("mousemove",function(){
boxSecond.style.backgroundColor = generateRandomColor();
})