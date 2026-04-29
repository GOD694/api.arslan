const express = require('express');
const {contactForm} = require('../controllers/contact-controllers');
const {formSchema} = require("../validator/contact-validator")
const validate = require("../middlewares/validate-middleware")


const router = express.Router();

router.route("/contact").post(validate(formSchema),contactForm);



module.exports = router