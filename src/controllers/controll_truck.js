const Truck = require('../models/truck_model')

module.exports = {
    index : async (req,res)  => {
        try{
            const {plate} = req.params
            const result = await Truck.find()

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    addTruck : async (req,res) => {
        try{

            const truck = new Truck(req.body)
            const result = await truck.save()

            res.status(200).json({"result": true, "data":truck})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    findTruck : async (req,res) => {
        try{
            const {plate} = req.params
            
            const result = await Truck.findOne({"plate": plate})

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    updateTruck : async (req,res) => {
        try{
            const {plate} = req.params
            const truck= req.body
            const result = await Truck.findOneAndReplace(plate, truck)

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    deleteTruck : async (req,res) => {
        try{
            const {plate} = req.params
            
            const result = await Truck.findOneAndDelete({"plate": plate })

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    }
}