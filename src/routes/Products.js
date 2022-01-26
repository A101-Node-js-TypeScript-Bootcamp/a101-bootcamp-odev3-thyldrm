const express = require("express")
const router = express.Router()
const {create,getAll,getProduct,getDiscounted,deleteProduct,updateProductStock} = require("../controllers/Products")


router.route("/create").post(create)
router.route("/all").get(getAll)
router.route("/:productId").get(getProduct)
router.route("/discounted/products").get(getDiscounted)
router.route("/:productId").delete(deleteProduct)
router.route("/:productId").put(updateProductStock)





module.exports=router;