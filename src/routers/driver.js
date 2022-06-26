//router
const {Router} = require('express');

const router = new Router()

require('../controllers/controll_drivers')

const {index, addDriver, findDriver, updateDriver, deleteDriver } = require('../controllers/controll_drivers');

//create
router.post('/', addDriver)
//read
router.get('/', index)
//find
router.get('/:identyCard', findDriver)
//update
router.patch('/:identyCard', updateDriver)
//delete
router.delete('/:identyCard', deleteDriver)

module.exports = router