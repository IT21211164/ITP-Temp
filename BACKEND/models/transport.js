const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportSchema = new Schema({

    date: {
        type: Date,
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    purchaseOrderNo: {
        type: String,
        required: true
    },
    noOfKms: {
        type: Number,
        required: true
    },
    fuelConsumption: {
        type: Number,
        required: true
    },
    timberVolume: {
        type: Number,
        required: true
    },

})

const transportation = mongoose.model("logstransportation", transportSchema); //vehicle - DB table name

module.exports = transportation;