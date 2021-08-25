const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: null,
    database: process.env.DATABASE
});
    
connection.connect((error) =>{
    if(error){
         return console.log("Connection faild!");
    }
    return console.log('Succesfully connected!');
});

function formData(){

    let name, email, password;
    
    for(let i = 0; i < document.querySelectorAll('input').length; i++){
    
        if(document.querySelectorAll('input')[i].getAttribute('type') === 'text'){
            name = document.querySelectorAll('input')[i].value;
        }
    
        if(document.querySelectorAll('input')[i].getAttribute('type') === 'email'){
            email = document.querySelectorAll('input')[i].value;
        }
    
        if(document.querySelectorAll('input')[i].getAttribute('type') === 'password'){
            password = document.querySelectorAll('input')[i].value;
        }
    
    }
    
    return {name: name, email: email, password: password};
}

function signIn(){

    const data = formData();

    connection.query(`SELECT name FROM users WHERE email = '${data.email}' and password = '${data.password}';`, (error, results, fields) =>{
        if(error) throw error;
        if(results.length > 0){
            return console.log('Succesfully sined In!');
        }
        console.log('Sign In faild!');
        connection.end(() =>{
            console.log('Connection closed!');
        });
    });

}

function signUp(){

    const data = formData();

    connection.query(`INSERT INTO users (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.password}');`, (error, results, fields) =>{
        if(error) throw error;
        if(results.rowsAffected > 0){
            return  console.log('Succesfully registered!');
        }
        console.log('Registering faild!');
        connection.end(() =>{
            console.log('Connection closed!');
        });
    });

}

module.exports = {signIn, signUp};

