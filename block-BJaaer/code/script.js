let form = document.querySelector('form');
let display = document.querySelector('.display');


let  userInfo = {}

function handler(event){
    event.preventDefault()
    console.log(form.elements)
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.movie = form.elements.movie.value;
    userInfo.color = form.elements.color.value;
    userInfo.rateOfMovie = form.elements.range.value;
    userInfo.bookGenre = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    console.log(userInfo)

    document.querySelector('h1').innerText = `Hello ${userInfo.name}`;
    document.querySelector('.email').innerText = `Email: ${userInfo.email}`;
    document.querySelector('.interest').innerText = `Your love: ${userInfo.movie}`;
    document.querySelector('.color').innerText = `Color: ${userInfo.color}`;
    document.querySelector('.rating').innerText = `Rating: ${userInfo.rateOfMovie}`;
    document.querySelector('.genre').innerText = `Book Genre: ${userInfo.bookGenre}`;
    document.querySelector('.term').innerText = 
    `You are ${userInfo.terms ? 'agreed' : 'not agreed'} to Terms and Conditions` ;

    display.classList.add('open')
}

display.addEventListener('click',function(){display.classList.remove('open')})



form.addEventListener('submit',handler);




