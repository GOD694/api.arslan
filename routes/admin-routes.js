const express = require("express");
const {
    getAllUsers,
    getAllContacts,
    getUserById,
    updateUser,
    deleteContactUser,
    deleteuser } = require("../controllers/admin-controller");

const authverifymiddleware = require("../middlewares/authverify-middleware");
const verifyAdminMiddleware = require("../middlewares/verfiyAdmin-middleware");



const router = express.Router();

//================================================
//user routes
//================================================

router.route("/users")
    .get(authverifymiddleware, verifyAdminMiddleware, getAllUsers);


router.route("/users/update/:id")
    .patch(authverifymiddleware, verifyAdminMiddleware, updateUser);

router.route("/users/:id")
    .delete(authverifymiddleware, verifyAdminMiddleware, deleteuser)
    .get(authverifymiddleware, verifyAdminMiddleware, getUserById);


//================================================
//contact routes
//================================================


router.route("/contacts").get(authverifymiddleware, verifyAdminMiddleware, getAllContacts);


router.route("/contacts/:id").delete(authverifymiddleware, verifyAdminMiddleware, deleteContactUser);
module.exports = router