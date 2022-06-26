//router
const {Router} = require('express');

const router = new Router()

require('../controllers/controll_drivers')

const {index, addDriver, findDriver, updateDriver, deleteDriver, addTruckForDriver } = require('../controllers/controll_drivers');

//create
router.post('/', addDriver)
//addTruck for Driver
router.patch('/addTruck/:plate', addTruckForDriver)
//read
router.get('/', index)
//find
router.get('/:identyCard', findDriver)
//update
router.patch('/:identyCard', updateDriver)
//delete
router.delete('/:identyCard', deleteDriver)

module.exports = router