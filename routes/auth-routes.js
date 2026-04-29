const express = require('express');
const validate = require("../middlewares/validate-middleware")
const { home, register, login, users ,} = require('../controllers/auth-controllers');
const { signupSchema, signinSchema , } = require("../validator/auth-validator")
const authverifymiddleware = require('../middlewares/authverify-middleware');


const router = express.Router();

router.route("/").get(home);


router.route("/register").post(validate(signupSchema), register);


router.route("/login").post(validate(signinSchema), login);


router.route("/user").get(authverifymiddleware,users)




module.exports = router