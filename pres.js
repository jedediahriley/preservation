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

// index page
APP.get('/equipment', (req, res) => {
   Equipment.find({}, (error, equip) => {
    res.render('index.ejs', {
        equipTag: equip
    })
   });
    
});

// new
APP.get('/equipment/add', (req, res) => {
    res.render('new.ejs')
   
});

// equipment display page
APP.get('/equipment/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, equip) => {
        
        
    
         res.render('show.ejs', {
             allEquip: equip
         });
       
    });
    
});


// create
APP.post('/equipment', (req, res) => {
    
    if(req.body.rInspection === 'on') {
        req.body.rInspection = true;
        
    
    }else {

        req.body.rInspection = false;
    }

    if(req.body.damage === 'on') {
        req.body.damage = true;
        
    
    }else {

        req.body.damage = false;
    }

    if(req.body.daily === 'on') {
        req.body.daily = true;
        
    
    }else {

        req.body.daily = false;
    }

    if(req.body.weekly === 'on') {
        req.body.weekly = true;
        
    
    }else {

        req.body.weekly = false;
    }

    if(req.body.monthly === 'on') {
        req.body.monthly = true;
        
    
    }else {

        req.body.monthly = false;
    }

    if(req.body.yearly === 'on') {
        req.body.yearly = true;
        
    
    }else {

        req.body.yearly = false;
    }

    if(req.body.rInspection === 'on') {
        req.body.rInspection = true;
        
    
    }else {

        req.body.rInspection = false;
    }

    if(req.body.yard === 'on') {
        req.body.yard = true;
        
    
    }else {

        req.body.yard = false;
    }

    if(req.body.indoor === 'on') {
        req.body.indoor = true;
        
    
    }else {

        req.body.indoor = false;
    }

    console.log(req.body);
    Equipment.create(req.body, (error, addEquip) => {
       if(error) {
           console.log(error)
       } else {
        // res.send(req.body);
        console.log(addEquip);
        res.redirect('/equipment')
        
    }
        
    });
    
});

APP.listen(PORT, () => {
    console.log('hello')
})