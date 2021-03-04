

// Dependencies
// file upload

const express = require('express');
const APP = express();
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const methodOverride = require('method-override');
const mongoose = require('mongoose');

const DB = mongoose.connection
require('dotenv').config()

// upload file path
const FILE_PATH = 'uploads';

// configure multer
const upload = multer({
    dest: `${FILE_PATH}/`
});

// enable CORS
APP.use(cors());

// add other middleware
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(morgan('dev'));


//Controllers
const equipController = require('./controllers/server.js');


// Port
const PORT = process.env.PORT || 3000;



// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/preservation';

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
















