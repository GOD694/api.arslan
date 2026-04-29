const {model ,Schema}= require("mongoose");

const contactSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    userText:{
        type:String,
        required:true
    }
})

const Contact = model("Contact",contactSchema);

module.exports = Contact;