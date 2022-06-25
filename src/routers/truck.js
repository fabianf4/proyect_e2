//router
const {Router} = require('express')
const router = new Router()

require('../controllers/controll_truck')
const {index,addTruck} = require("../controllers/controll_truck");

//create
router.post('/', addTruck)
//read
router.get('/', index)
//update
router.put('/')
//delete
router.delete('/')

module.exports = router