const Contact = require("../models/contact-model");




const contactForm =async (req,res) => {
    try {
        
         const {username,email,phone,userText} = req.body;
         console.log(req.body);
         const contactCreated = await Contact.create({
            username,email,phone,userText
         })
         res.status(201).json({
          
            message:"contact form submitted successfully",
            data:contactCreated
         })

    } catch (error) {
        console.log(error);
    }
}


// ============
// home 
// ============




module.exports = {contactForm,} ;