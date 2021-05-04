ul = document.querySelector('ul');

function generateRandomColor(){
    let tempArray = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let color = "#"
    for(i=0; i<6; i++){
      color += tempArray[Math.floor(Math.random() * 16)]
    }
    return color;
 }

 for(let i=0; i<100; i++){
    li = document.createElement('li');
    li.classList.add('item');
    // li.innerText = Math.floor(Math.random() * 1000)
    ul.append(li)
 }

ul.addEventListener('mousemove',function(){
    li.innerText = Math.floor(Math.random() * 1000)
})
