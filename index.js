const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const queryString = require('querystring');


const app=express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.get('/super_simple', (req, res) => {
    res.status(200).send({
        message: "Hello from the planetary api!"
    });
});


app.get('/not_found', (req, res) => {
    res.status(404).send({
        message: "We could not find that"
    });
});


app.get('/parameters', (req, res) => {
    let message = "";
    let statusCode = 401;
    let name = req.query.name;
    let age = parseInt(req.query.age);
    if( age < 18 ){
        message = "I'm sorry " + name + " but you are not old enough!"
    } else{
        message = "Welcome, " + name + ".  You are old enough";
        statusCode = 200;
    }


    res.status(statusCode).send({
        message: message,
        name: name,
        age: age
    });
});

app.get('/url_variables/:name/:/age', (req, res) => {
    //TODO implement
});

app.get('/planets', (req, res) =>{
    //TODO:  implement
});


app.post('/register', (req, res) =>{
    //TODO:  implement
});


app.post('/login', (req, res)=>{
    //TODO: implement
});


app.get('/retrieve_password/:email', (req, res) => {
    //TODO:  implement
});


app.get('/planet_details/:planet_id', (req, res)=>{
    //TODO:  implement
});


app.post('/add_planet', (req, res)=>{
    //TODO:  implement
});


app.put('/update_planet', (req, res)=>{
    //TODO:  implement
});


app.delete('/remove_planet/:planet_id', (req, res)=>{
    //TODO:  implement
});