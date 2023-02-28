const container = document.querySelector(".container__content__S1");
const email = document.querySelector(".container__content__S1__input");
const dangerIcon = document.querySelector(".container__content__S1__error");
const errorPar = document.querySelector(".container__content__danger__paragraph");


container.addEventListener('submit', (event)=>{
    event.preventDefault();
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExp.test(email.value) == true){
        email.style.border = '1px solid hsl(0, 6%, 24%)';
        email.style.backgroundImage = '';
        errorPar.innerHTML = '';
    }else{
        email.style.border = '1px solid red';
        email.style.backgroundImage = 'url(./images/icon-error.svg)';
        errorPar.innerHTML = 'Please provide a valid email';
    }
});