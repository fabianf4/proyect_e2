const Truck = require('../models/truck_model')

module.exports = {
    index : (req,res) => {
        res.send('ok')
    },
    addTruck : async (req,res) => {
        try{

            const client = new Truck(req.body)
            const result = await client.save()

            res.status(200).json({result: true, client})
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