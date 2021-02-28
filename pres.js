const express = require('express');
const APP = express();
const PORT = 3000;

// Dependencies
const mongoose = require('mongoose');
const Add = require('./models/addequip.js');

// Global configuration
const mongoURI = 'mongodb://localhost:27017/equipmentpreservation'
const db = mongoose.connection;

// Connecting to Mongo
mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},  () => {
    console.log('connected to Mongo');
});

// Routes

APP.get('/equipment', (req, res) => {
    res.send('index')

});

APP.listen(PORT, () => {
    console.log('hello')
})