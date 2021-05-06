let form = document.querySelector('form');


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

    document.querySelector('h1').innerText += userInfo.name;
    document.querySelector('.email').innerText += userInfo.email;
    document.querySelector('.interest').innerText += userInfo.movie;
    document.querySelector('.color').innerText += userInfo.color;
    document.querySelector('.rating').innerText += userInfo.rateOfMovie;
    document.querySelector('.genre').innerText += userInfo.bookGenre;
    document.querySelector('.term').innerText = 
    `You are ${userInfo.terms? 'agreed' : 'not agreed to Terms and Conditions'}` ;
}


form.addEventListener('submit',handler);




