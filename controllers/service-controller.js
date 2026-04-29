const Services = require("../models/service-model");



// ====================
// service logic here
// ====================

const createService = async (req, res) => {
    try {
        const createpage = await Services.create(req.body);
        if (!createpage) {
            return res.status(400).json({ msg: "Service Created Unsuccesfull" })
        }
        return res.status(201).json({ msg: "Service Created Succesfull" })
    } catch (err) {
        console.log("service page", err)
        next(err)
    }

};



//  ══════════════════════════════════════════════════════
//    Get all Service
// ════════════════════════════════════════════════════════ 

const getService = async (req, res) => {
    try {
        const serviceData = await Services.find();
        if (!serviceData) {
            res.status(400).json({ msg: 'the service page are note loded' });
        }
        res.status(200).json({msg:"the retrive data successfull",
            data:serviceData});
    } catch (err) {
        console.log(err)

    }
}

//  ══════════════════════════════════════════════════════
//    Update  Service
// ═══════════════════════════════════════════════════════ 


const updateService = async(req,res)=>{
    try {
        const retriveData = await Services.findByIdAndUpdate();
    } catch (err) {
        console.log(err)
    }
}

module.exports = { createService , getService ,updateService }
