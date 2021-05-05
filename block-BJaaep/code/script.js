boxes1 = document.querySelector('.boxes-1')

// without event delegation 
for (let index = 0; index < 12; index++) {
    li = document.createElement('li');
    li.classList.add('box')

    boxes1.append(li)
}

function handler(li, number){
    li.innerText = ++number;
}

Array.from(boxes1.children).forEach((box, index) => {
    box.addEventListener('click', function(){
        handler(box, index)
    })
});

// with event delegation
boxes2 = document.querySelector('.boxes-2')
let count=1;
for (let index = 0; index < 12; index++) {
    li = document.createElement('li');
    li.classList.add('box')
    li.setAttribute("data-count", count++)

    boxes2.append(li)
}

// Array.from(boxes2.children).forEach(ele=>{
    
// })

function handler1(e){
    e.target.innerText = e.target.dataset.count
}

boxes2.addEventListener('click', handler1)