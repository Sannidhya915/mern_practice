const dotenv = require('dotenv')
const express = require('express');
const app = express();

// Defining path for config.env
dotenv.config({path: './config.env'})

//Middleware
const middleware = (req,res,next) =>{
    console.log("This is middleware");
    next();
}


// Using get method
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/about', middleware, (req ,res) => {
    res.send('About page');
});


// Running app on a port
app.listen(3000,()=>{
    console.log("Server running on PORT:3000");
});