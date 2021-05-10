let input = document.querySelector("input[type='text']");

let root = document.querySelector("ul");

let allMovies = [
    {
        name: 'titanic',
        watched: false
    },
    {
        name: 'titanic',
        watched: true
    }
]

function handler(event){
    if(event.keyCode === 13){
          allMovies.push({
              name: event.target.value,
              watched: false
          })
          event.target.value=""
          createMovieUI();
    }
}
input.addEventListener('keyup',handler)

function deleteMovies(){
    // root.removeChild(li); or
    // event.target.parentElement.remove(); or
    allMovies.splice(event.target.dataset.id,1);
    createMovieUI();
}

function handleChange(){
    allMovies[event.target.dataset.id].watched = !allMovies[event.target.dataset.id].watched;
    createMovieUI();
}

function createMovieUI(){
    root.innerHTML = ""

   allMovies.forEach( (movie, index) => {
    let li = document.createElement("li");
    li.classList.add('li')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.setAttribute('data-id',index)
    checkbox.checked = movie.watched;
    checkbox.addEventListener('change', handleChange)

    let span = document.createElement('span')
    span.innerText = movie.name;
    span.classList.add('movie-name') 

    let button = document.createElement('button')
    button.innerText ='X';
    button.setAttribute("data-id",index)
    button.addEventListener('click',deleteMovies)

    li.append(checkbox,span,button)

    root.append(li) 
   })
}

createMovieUI();