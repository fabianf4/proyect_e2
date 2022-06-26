//router
const {Router} = require('express')
const router = new Router()

require('../controllers/controll_truck')
const {index,addTruck, findTruck, updateTruck, deleteTruck} = require("../controllers/controll_truck");

//create
router.post('/', addTruck)
//read
router.get('/', index)
//find
router.get('/:plate', findTruck)
//update
router.put('/:plate', updateTruck)
//delete
router.delete('/:plate', deleteTruck)

module.exports = router