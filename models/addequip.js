const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addEquipSchema = new Schema({
    po: { type: String, required: true},
    equipment: {type: String, required: true},
    tagNumber: {type: String, required: true},
    receiptInspection: {type: Boolean},
    damage: {type: String},
    daily: {type: Boolean},
    weekly: {type: Boolean},
    monthly: {type: Boolean},
    yearly: {type: Boolean},
    maint: {type: String},
    buyer: {type: String},
    bPhone: {type: String},
    vendor: {type: String},
    poc: {type: String},
    warehouse: {type: String},
    yard: {type: Boolean},
    indoor: {type: Boolean},
});

const Add = mongoose.model('Add', addEquipSchema);

module.exports = Add;