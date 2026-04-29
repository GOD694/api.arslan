const { is } = require("zod/v4/locales");
const user = require("../models/auth-model");
const bcrypt = require('bcryptjs');


// ============
// home 
// ============


const home = async (req, res) => {
    res.send('i love you patni jiii')
}

// ============
// register 
// ============

const register = async (req, res) => {
    try {
        const { username, email, password, phone, isAdmin } = req.body;
        console.log("register 1 :", req.body);
        const userExist = await user.findOne({ email }).select({ email: 1 });
        console.log("register 2", userExist);
        if (userExist) {
            res.status(400).json(
                {
                    "msg": "user already exist",
                }
            )
        } else {
            const userCreated = await user.create({
                username,
                email,
                password,
                phone,

            })
            console.log('usercreated', userCreated);
            res.status(201).json({
                msg: "User registered successfully",
                token: userCreated.generateToken(),
            });
        }



    } catch (error) {
        console.log(error)
    }
}

// ============
// login 
// ============


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await user.findOne({ email }).select({ email: 1, password: 1, isAdmin: 1 });
        if (!userExist) {
            res.status(400).json({
                "msg": "user not found"

            })
        }
        else {
            const isMatch = await userExist.matchPassword(password);
            if (!isMatch) {
                res.status(400).json({
                    "msg": "invalid credentials"
                })
            } else {
                res.status(200).json({
                    msg: "user logged in successfully",
                    token: userExist.generateToken(),
                   
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}


// ============
// users 
// ============


const users = async (req,res)=>{

try {
    const userData = req.body;
    console.log("User data from token:", {
        userId: req.userId,
        email: req.email,
        isAdmin: req.isAdmin
      });
    return res.status(200).json({
        msg:"user data fetched successfully",
        userId: req.userId,
        username: req.username,
        email: req.email,
        phone: req.phone,
        isAdmin: req.isAdmin
    })


} catch (error) {
    console.log("Internal server error",error);
    return res.status(500).json({
        msg: "Internal server error"
      });
}    
}






module.exports = { home, register, login ,users , }