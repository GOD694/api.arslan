const user = require('../models/auth-model');
const Contact = require("../models/contact-model")


//  ══════════════════════════════════════════════════════
//    Get all user
// ════════════════════════════════════════════════════════ 


const getAllUsers = async (req, res) => {
    try {
        const alluserdata = await user.find().select({ password: 0 });
        if (!alluserdata) {
            res.status(400).json({ msg: 'the user data are not found' });
        }
       return res.status(200).json({
            msg: "the user retrive data successfull",
            data: alluserdata
        });
    } catch (err) {
        console.log(err)

    }
}


//  ══════════════════════════════════════════════════════
//    Get and delete single user
// ════════════════════════════════════════════════════════ 

const deleteuser = async (req, res) => {
    try {
        // const { id } = req.params;
        const deleteuserdata = await user.findByIdAndDelete(req.params.id).select({ password: 0 });
        if (!deleteuserdata) {
            res.status(404).json({
                msg: "user are not found"
            })
        }
           return res.status(200).json({ msg: "user delete successfully",data:deleteuserdata })
    } catch (error) {
        console.log(error);
       return  res.status(500).json({
            msg: 'Internal server error'
        })
    }
}


//  ══════════════════════════════════════════════════════
//    Get all constacts
// ════════════════════════════════════════════════════════ 


const getAllContacts = async (req, res) => {
    try {
        const allcontactdata = await Contact.find().select({ password: 0 });
        if (!allcontactdata) {
          return  res.status(400).json({ msg: 'the contact data are not found' });
        }
       return res.status(200).json({
            msg: "the contact retrive data successfull",
            data: allcontactdata
        });
    } catch (err) {
        console.log(err)

    }
}

//  ══════════════════════════════════════════════════════
//    Get user by  Id
// ════════════════════════════════════════════════════════ 

const getUserById = async(req,res)=>{
    try {
        const userData = await user.findById(req.params.id).select({password : 0});
        if(!userData){
           return res.status(404).json({msg:"user not found"})
        }
        return res.status(200).json({msg:"the user retrive data successfull",data:userData})
    } catch (error) {
        console.log(error)
        
    }
}

//  ══════════════════════════════════════════════════════
//    Get user by  Id and updata the data
// ════════════════════════════════════════════════════════ 

const updateUser = async (req,res)=>{
    try {
        const {id} = req.params;

        const {username,phone,email} = req.body;
       
       
        const userdata    = await user.findByIdAndUpdate(id ,{username,phone,email},{
            new:true
        }).select({password:0});
        if(!userdata){
           return res.status(404).json({msg:"user not found"})
        }
       return res.status(200).json({msg:"the user update data successfull",data:userdata})
    } catch (error) {
        console.log("error",error)
    }
};

//  ══════════════════════════════════════════════════════
//    Get and delete single cotact
// ════════════════════════════════════════════════════════ 

const deleteContactUser = async (req, res) => {
    try {
        // const { id } = req.params;
        const deleteuserdata = await Contact.findByIdAndDelete(req.params.id);
        console.log("deleteuserdata",deleteuserdata)
        if (!deleteuserdata) {
            return res.status(404).json({
                msg: "user are not found"
            })
        }
           return res.status(200).json({ msg: "user delete successfully",data:deleteuserdata })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}


module.exports = { getAllUsers, getAllContacts, deleteuser, getUserById , updateUser ,deleteContactUser};