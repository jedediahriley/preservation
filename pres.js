




// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const APP = express();
const DB = mongoose.connection

// Port
const PORT = process.env.PORT || 3000;

// Models
const Equipment = require('./models/addequip.js');

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'preservation';

// Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Opening the connection to mongo
DB.on('open' , ()=>{});




// middleware
APP.use(express.urlencoded({extended: true}));
APP.use(methodOverride('_method'))

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

    
    Equipment.create(req.body, (error, addEquip) => {
       if(error) {
           console.log(error)
       } else {
       
        res.redirect('/equipment')
        
    }
        
    });
    
});

// Create Edit Route
APP.put('/equipment/:id', (req, res) => {
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
    
    Equipment.findByIdAndUpdate(req.params.id, req.body,  (err, updateModel) => {
        
        res.redirect('/equipment')
    });
});

// Delete Route
APP.delete('/equipment/:id', (req, res) => {
    Equipment.findByIdAndRemove(req.params.id, (err, data) => {
        
        res.redirect('/equipment');
    });
});

APP.listen(PORT, () => {
    console.log('hello')
})