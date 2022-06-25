const mongoose = require('mongoose')

const MONGOOSE_URI = process.env.MONGOOSE_URI

const URI = MONGOOSE_URI

mongoose.connect(URI)
    .then(()=> console.log("Connect success mongoDB"))
    .catch( err => console.log(err))

module.exports = mongoose