const mongoose = require('mongoose')
const {Schema} = mongoose

const truckSchema = new Schema({
    plate : {
        type: String,
        require: true,
        unique: true,
        match: new RegExp('[A-Z]{3}[-][0-9]{3}$')
    },
    brand :{
        type: String,
        require: true
    },
    model : {
        type: Date,
        match: new RegExp('[0-9]{4}[-][0-9]{2}[-][0-9]{2}'),
        require: true
    },
    weight : {
        type: Number,
        require: true
    },


})

module.exports = mongoose.model('truck',truckSchema)