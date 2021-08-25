
window.addEventListener('DOMContentLoaded', () =>{
    const db = require('./dataBase.js');

    document.querySelector('#submit').addEventListener('click', () => {

        if(document.querySelectorAll('a')[0].getAttribute('id') == null){
            db.signIn()
        }else {
            db.signUp()
        }
    
    });

});
    