const express = require("express")
const router = express.Router()
const {create} = require("../controllers/Products")


router.route("/create").post(create)





module.exports=router;