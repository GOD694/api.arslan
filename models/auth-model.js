const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", async function () {
    try {
        if (!this.isModified("password")) {
            return;
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.log(error)

    }

})

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken =  function () {
    try {
       return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            }
        );
    } catch (error) {
        console.log(error)

    }
};



const user = mongoose.model("User", userSchema);

module.exports = user;