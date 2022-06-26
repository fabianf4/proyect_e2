const Driver = require('../models/driver_model')
const Truck= require('../models/truck_model')

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
            const result = await driver.save()

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
            const {names, lastName , birth, cellPhone, plate}= req.body
            const truck= await Truck.findOne({plate})
            console.log(truck)
           
            if(!!truck){
                const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone, truck})
                res.status(200).json({"result": true, "data": result, "truck": true})
            }else{
                const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone})
                res.status(200).json({"result": true, "data": result, "truck": false})
            }
            
           
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    addTruckForDriver: async(req, res) =>{
        const {plate} = req.params
        if(!!truck){
            const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone, truck})
            res.status(200).json({"result": true, "data": result, "truck": true})
        }else{
            const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone})
            res.status(200).json({"result": true, "data": result, "truck": false})
        }
    },
    deleteDriver : async (req,res) => {
        try{
            const {identyCard} = req.params
            
            const result = await Driver.findOneAndDelete({"identyCard": identyCard })

            res.status(200).json({"result": true, "data": result})
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    }
}