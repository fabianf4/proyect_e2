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
            const {names, lastName , birth, cellPhone}= req.body

            const result = await Driver.findOneAndUpdate({identyCard}, {names, lastName , birth, cellPhone})
            res.status(200).json({"result": true, "data": result})
           
        }catch (e){
            res.status(500).json({"result": false, "info": e})
        }
    },
    addTruckForDriver: async(req, res) =>{
        const {identyCard} = req.params
        const {plate}= req.body

        const truck= await Truck.findOne({plate})
        const driver = await Driver.findOne({identyCard})

        if(!truck.driver && !driver.truck){
            console.log("si")
        }else{
            console.log("no")
        }

        if((!!truck && !!driver) && (!truck.driver && !driver.truck)){
            const dataDriver = await Driver.findOneAndUpdate({identyCard}, {truck})
            const dataTruck = await Truck.findOneAndUpdate({plate},{driver})
            res.status(200).json({"result": true, dataDriver, dataTruck, "add": true})
        }else{
            res.status(200).json({"result": true, "add": false})
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