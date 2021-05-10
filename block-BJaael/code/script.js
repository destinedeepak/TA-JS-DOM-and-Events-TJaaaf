ul = document.querySelector('ul');

function generateRandomColor(){
    let tempArray = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let color = "#"
    for(i=0; i<6; i++){
      color += tempArray[Math.floor(Math.random() * 16)]
    }
    return color;
 }

 let displayArry =[];
 for(let i=0; i<500; i++){
    li = document.createElement('li');
    li.classList.add('item');
    li.innerText = Math.floor(Math.random() * 1000)
    displayArry.push(li);
    ul.append(li);
 }

li = document.querySelectorAll('.item');
function handelMouseMove(){
    li.forEach((box)=>{
    box.style.background = generateRandomColor();
    box.innerText = Math.floor(Math.random() * 1000)
})
}

ul.addEventListener('mousemove',handelMouseMove)