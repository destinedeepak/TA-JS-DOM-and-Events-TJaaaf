let input = document.querySelector("input[type='text']");

let root = document.querySelector("ul");

let todos = [
    // {
    //     name: 'Learn Dom',
    //     isDone: false
    // },
    // {
    //     name: 'play tenis table',
    //     isDone: false
    // }
]

function handler(event){
    if(event.keyCode === 13){
          todos.push({
              name: event.target.value,
              isDone: false
          })
          event.target.value=""
          createUI(todos, root);
          getNumberOfCompletedTodo();
    }
}
input.addEventListener('keyup',handler)

function deleteTodos(){
    todos.splice(event.target.dataset.id,1);
    createUI(todos, root);
    getNumberOfCompletedTodo();
    toggleClearButton();
}

function handleChange(){
    todos[event.target.dataset.id].isDone = !todos[event.target.dataset.id].isDone;
    createUI(todos, root);
    getNumberOfCompletedTodo();
    toggleClearButton();
}
// left items 
function getNumberOfCompletedTodo(){
    document.querySelector(".left_items_data")
    .innerText = todos.reduce( (acc, todo)=>{
        if(!todo.isDone){
            return ++acc
        }
        return acc;
    },0)
}

// all items 
let allItems =document.querySelector(".all_items");
allItems.addEventListener('click',function(){
    createUI(todos, root);
})

// creating active items UI 
document.querySelector(".active_items").addEventListener('click',function(){
    createActiveUI(todos, root)
})

function createActiveUI(allTodo, rootElement){
    root.innerHTML = ""

   allTodo.forEach( (todo, index) => {
     if(!todo.isDone){
        let li = document.createElement("li");
        li.classList.add('li')
    
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type','checkbox')
        checkbox.setAttribute('data-id',index)
        checkbox.checked = todo.isDone;
        checkbox.addEventListener('change', handleChange)
    
        let span = document.createElement('span')
        span.innerText = todo.name;
        span.classList.add('todo-name') 
    
        let button = document.createElement('button')
        button.innerText ='X';
        button.classList.add('cross-btn');
        button.setAttribute("data-id",index)
        button.addEventListener('click',deleteTodos)
    
        li.append(checkbox,span,button)
    
        rootElement.append(li) 
     }
   })
}

// creating completed todos UI 
document.querySelector(".completed_items").addEventListener('click',function(){
    createCompletedUI(todos, root)
})

function createCompletedUI(allTodo, rootElement){
    root.innerHTML = ""

   allTodo.forEach( (todo, index) => {
     if(todo.isDone){
        let li = document.createElement("li");
        li.classList.add('li')
    
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type','checkbox')
        checkbox.setAttribute('data-id',index)
        checkbox.checked = todo.isDone;
        checkbox.addEventListener('change', handleChange)
    
        let span = document.createElement('span')
        span.innerText = todo.name;
        span.classList.add('todo-name') 
    
        let button = document.createElement('button')
        button.innerText ='X';
        button.setAttribute("data-id",index)
        button.classList.add('cross-btn');
        button.addEventListener('click',deleteTodos)
    
        li.append(checkbox,span,button)
    
        rootElement.append(li) 
     }
   })
}

// creating whole UI
function createUI(allTodo, rootElement){
    root.innerHTML = ""

   allTodo.forEach( (todo, index) => {
    let li = document.createElement("li");
    li.classList.add('li')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.setAttribute('data-id',index)
    checkbox.checked = todo.isDone;
    checkbox.addEventListener('change', handleChange)

    let span = document.createElement('span')
    span.innerText = todo.name;
    span.classList.add('todo-name') 

    let button = document.createElement('button')
    button.innerText ='X';
    button.classList.add('cross-btn');
    button.setAttribute("data-id",index)
    button.addEventListener('click',deleteTodos)

    li.append(checkbox,span,button)

    rootElement.append(li) 
   })
}

// clearing completed

let clearCompleted = document.querySelector(".clear_completed");
clearCompleted.addEventListener('click',function(){
    todos.forEach((todo,index)=>{
        if(todo.isDone){
            todos.splice(index,1)
        }
    })
    createUI(todos, root)
})

// let current
// function donotSwitch(){

// }

function toggleClearButton(){
   let isTrue = todos.some(todo =>{
        return todo.isDone;
    })
    if(isTrue){
        clearCompleted.classList.add('show')
        console.log("show")
    }else{
        clearCompleted.classList.remove('show')
        clearCompleted.classList.add('hide')
        console.log("hide")
    }

}
toggleClearButton();

createUI(todos, root);
getNumberOfCompletedTodo();