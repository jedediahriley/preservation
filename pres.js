

// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const APP = express();
const DB = mongoose.connection

//Controllers
const equipController = require('./controllers/server.js');


// Port
const PORT = process.env.PORT || 3000;



// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'preservation';

// Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Opening the connection to mongo
DB.on('open' , ()=>{});




// middleware
APP.use(express.urlencoded({extended: true}))
APP.use(methodOverride('_method'))
APP.get('/', (req, res) => {res.redirect('/equipment')})
APP.use('/equipment', equipController)
APP.use(express.static('public'));

APP.listen(PORT, () => {
    console.log('hello')
})
















