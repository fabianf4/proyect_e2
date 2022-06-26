const Truck = require('../models/truck_model')

module.exports = {
    index : (req,res) => {
        res.send('ok')
    },
    addTruck : async (req,res) => {
        try{

            const truck = new Truck(req.body)
            const result = await truck.save()

            res.status(200).json({result: true, truck})
        }catch (e){
            res.status(500).json({result: false, info: e})
        }
    },
    findTruck : (req,res) => {

    },
    updateTruck : (req,res) => {

    },
    deleTruck : (req,res) => {

    }
}