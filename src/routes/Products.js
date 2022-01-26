const express = require("express")
const router = express.Router()
const {create,getAll,getProduct} = require("../controllers/Products")


router.route("/create").post(create)
router.route("/all").get(getAll)
router.route("/:productId").get(getProduct)





module.exports=router;