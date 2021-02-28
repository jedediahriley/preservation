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
APP.get('/equipment/seed', (req, res) => {
    Add.create([
        {
            po: '7-0987',
            equipment: 'Generator',
            tagNumber: 'FD-0987-01',
            receiptInspection: true,
            damage: false,
            daily: false,
            weekly: false,
            monthly: true,
            yearly: true,
            maint: 'Rotate Shaft 2 1/4 turns. Connect Heater',
            buyer: 'Ralph Waldo Emerson',
            bPhone: '867-5309',
            vendor: "Acme Generator Company",
            poc: 'Jenny',
            warehouse: "North Yard",
            yard: true,
            indoor: false
        }
    ], (error, data) => {
        res.redirect('/equipment');
    }
    );
});

APP.get('/equipment', (req, res) => {

    res.send('index');
});

APP.get('/addequipment', (req, res) => {
    res.render('new.ejs')

});

APP.listen(PORT, () => {
    console.log('hello')
})