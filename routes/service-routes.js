const express = require("express");
const { updateService,
    createService,
    getService
} = require("../controllers/service-controller")

const router = express.Router();

router
    .route("/data")
    .get(getService)
router
    .route("/create")
    .post(createService)
router
    .route("/update/:id")
    .patch(updateService)



module.exports = router