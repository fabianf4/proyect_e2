const Truck = require('../models/truck_model')
const Driver = require("../models/driver_model")
//a ver
module.exports = {
    index : async (req,res)  => {
        try{
            const result = await Truck.find()

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    addTruck : async (req,res) => {
        try{
            const truck = new Truck(req.body)

            await truck.save()

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
            console.log(plate)
            const {brand,model,weight}= req.body
            const result = await Truck.findOneAndUpdate({plate}, {brand,model,weight})

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
    },
    addDriverForTruck: async(req, res) =>{
        const {plate} = req.params
        const {identyCard}= req.body

        console.log(plate)

        const truck= await Truck.findOne({plate})
        const driver = await Driver.findOne({identyCard})

        if(!!truck && !!driver){
            const dataTruck = await Truck.findOneAndUpdate({plate},{driver:identyCard})
            res.status(200).json({"result": true, dataTruck, "add": true})
        }else{
            res.status(200).json({"result": true, "add": false})
        }
    },

}