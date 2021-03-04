const express = require('express');
const router = express.Router();
const Equipment = require('../models/addequip.js');





// Routes
router.get('/seed', (req, res) => {
    
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
router.get('/', (req, res) => {
    
    Equipment.find({}, (error, equip) => {
     res.render('index.ejs', {
         equipTag: equip
     })
    });
     
 });


 // new
router.get('/add', (req, res) => {
    res.render('new.ejs')
   
});

// equipment display page
router.get('/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, equip) => {
        
        
    
         res.render('show.ejs', {
             allEquip: equip
         });
       
    });
    
});

// create
router.post('/', (req, res) => {
    
    if(req.body.receiptInspection === 'on') {
        req.body.receiptInspection = true;
        
    
    }else {

        req.body.receiptInspection = false;
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
router.put('/:id', (req, res) => {
    if(req.body.receiptInspection === 'on') {
        req.body.receiptInspection = true;
        
    
    }else {

        req.body.receiptInspection = false;
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
        if(err) {
            console.log(err)
        } else {
        res.redirect('/equipment')
        }
    });
});



// Delete Route
router.delete('/:id', (req, res) => {
    Equipment.findByIdAndRemove(req.params.id, (err, data) => {
        
        res.redirect('/equipment');
    });
});



module.exports = router;