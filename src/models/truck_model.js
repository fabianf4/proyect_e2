const mongoose = require('mongoose')
const {Schema} = mongoose

const truckSchema = new Schema({
    plate : {
        type: String,
        require: true,
        unique: true
    },
    model : {
        type: Date,
        require: true
    },
    weight : {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('truck',truckSchema)