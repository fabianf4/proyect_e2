const mongoose = require('mongoose')
const {Schema} = mongoose

const driverSchema = new Schema({
    identyCard : {
        type: String,
        require: true,
        unique: true,
    },
    names :{
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },
    birth : {
        type: Date,
        require: true
    },
    cellPhone : {
        type: String,
        require: true,
        match: new RegExp('[0-9]{10}$')
    }

})

module.exports = mongoose.model('driver',driverSchema)