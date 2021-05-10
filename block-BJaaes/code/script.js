let form = document.querySelector("form");

let userInfo = {};

let errorMessage = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name] 
    elm.parentElement.classList.add('error')
}

function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText =""
    elm.parentElement.classList.remove('error')
    elm.parentElement.classList.add('success')
}

function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements;

    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const confirmPassword = elements.confirmPassword.value;

    console.log({username, name, email, phone, password, confirmPassword});
    //username
    if(username.length < 4){
        errorMessage.username = "Username can't be less than 4 character"
        displayError("username");
    }
    else{
        displaySuccess("username")
    }
    // name 
    if(!isNaN(name)){
        errorMessage.name = "You can't use number in the name field"
        displayError("name");
    }else{
        displaySuccess("name")
    }
    // email 
    if(!email.includes('@')){
        errorMessage.email = "Email must contains the symbol '@'"
        displayError("email");
    }
    else if(email.length < 7){
        errorMessage.email = "Email must be atleast 6 characters"
        displayError("email");
    }
    else{
        displaySuccess("email")
    }
    // phone 
    if(!isNaN('phone')){
        errorMessage.phone = "You can't use phone in the name field"
        displayError("phone");
    }
    else if(phone.length < 7){
        errorMessage.phone = "Email must be atleast 6 characters"
        displayError("phone");
    }
    else{
        displaySuccess("phone")
    }
    // password 
    if(password !== confirmPassword){
        errorMessage.confirmPassword = "password and confirm password does not match"
        displayError("confirmPassword")
    }
    else{
        displaySuccess("password")
        displaySuccess("confirmPassword")
    }

}

form.addEventListener('submit',handleSubmit)

