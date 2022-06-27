const Driver = require('../models/driver_model')
const Truck = require('../models/truck_model')

module.exports = {
    index : async (req,res)  => {
        try{
            const result = await Driver.find()

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    addDriver : async (req,res) => {
        try{

            const driver = new Driver(req.body)
            await driver.save()

            res.status(200).json({"result": true, "data":driver})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    findDriver : async (req,res) => {
        try{
            const {identyCard} = req.params
            
            const result = await Driver.findOne({"identyCard": identyCard})

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    updateDriver : async (req,res) => {
        try{
            const {identyCard} = req.params
            const {names, lastName , birth, cellPhone}= req.body

            const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone})
            res.status(200).json({"result": true, "data": result})
           
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    deleteDriver : async (req,res) => {
        try{
            const {identyCard} = req.params
            
            const result = await Driver.findOneAndDelete({"identyCard": identyCard })
            await Truck.findOneAndUpdate({driver:identyCard},{driver:""})

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    }
}