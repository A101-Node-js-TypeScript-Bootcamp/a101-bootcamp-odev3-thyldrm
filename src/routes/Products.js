const express = require("express")
const router = express.Router()
const {create,getAll} = require("../controllers/Products")


router.route("/create").post(create)
router.route("/all").get(getAll)





module.exports=router;