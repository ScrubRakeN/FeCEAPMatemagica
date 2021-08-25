const form = document.querySelector('form');
const buttonOne = document.querySelectorAll('a')[0];
const buttonTwo = document.querySelectorAll('a')[1];
const submitButton = document.querySelector('#submit');
const passwordForgotten = document.querySelector('#passwordForgotten');

buttonOne.addEventListener("click", () =>{

    if(!document.querySelector('#anchor')){
        const a = document.createElement('a');
        a.appendChild(document.createTextNode('Forgot your password?'));
        a.setAttribute('id', 'anchor');
        a.setAttribute('href', '');
        passwordForgotten.appendChild(a);
    }

    if(document.querySelector('#nick')){
        document.querySelector('#nick').remove();
    }

    buttonTwo.id = 'isNotSelected';
    buttonOne.removeAttribute('id');
    submitButton.setAttribute('value', 'Sign In');

});

buttonTwo.addEventListener('click', () =>{

    if(!document.querySelector('#nick')){
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Enter your Nickname')
        input.setAttribute('id', 'nick');
        form.insertBefore(input, document.querySelectorAll('input')[0]);
    }

    if(document.querySelector('#anchor')){
        document.querySelector('#anchor').remove();
    }

    buttonOne.id = 'isNotSelected';
    buttonTwo.removeAttribute('id');
    submitButton.setAttribute('value', 'Sign Up');

});
