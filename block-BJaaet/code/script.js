let input = document.querySelector("input[type='text']");

let root = document.querySelector("ul");

function handler(event){
    if(event.keyCode === 13){
          let li = document.createElement("li");
          li.classList.add('li')

          let checkbox = document.createElement('input')
          checkbox.setAttribute('type','checkbox')
          let span = document.createElement('span')
          span.innerText = event.target.value;
          span.classList.add('movie-name')
          let button = document.createElement('button')
          button.innerText ='X';

          li.append(checkbox,span,button)

          root.append(li) 

          button.addEventListener('click',function(){
              root.removeChild(li);
          })


    }
}

input.addEventListener('keyup',handler)