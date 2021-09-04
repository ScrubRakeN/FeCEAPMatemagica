const db = require('./dataBase.js');
window.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#submit').addEventListener('click', () => {

        if(document.querySelectorAll('a')[0].getAttribute('id') == null){
            db.signIn()
        }else {
            db.signUp()
        }
    });
});