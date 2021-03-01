const express = require('express');
const APP = express();
const PORT = 3000;

// Dependencies
const mongoose = require('mongoose');

// Models
const Equipment = require('./models/addequip.js');

// Global configuration
mongoose.connect('mongodb://localhost:27017/preservation', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to Mongo')
})




// middleware
APP.use(express.urlencoded({extended: true}));

// Routes
APP.get('/equipment/seed', (req, res) => {
    Equipment.create([
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
    res.render('index.ejs')
})

// new
APP.get('/equipment/add', (req, res) => {
    res.render('new.ejs')

});

// create
APP.post('/equipment', (req, res) => {
    
    if(req.body.rInspection === 'on') {
        req.body.rInspection = true;
        
    
    }else {

        req.body.rInspection = false;
    }

    console.log(req.body);
    Equipment.create(req.body, (error, addEquip) => {
        
        res.send(req.body);
        console.log(addEquip);
    });
});

APP.listen(PORT, () => {
    console.log('hello')
})