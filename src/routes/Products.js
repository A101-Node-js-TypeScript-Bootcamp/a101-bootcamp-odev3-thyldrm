const express = require("express")
const router = express.Router()
const {create,getAll,getProduct,getDiscounted,deleteProduct,updateProductStock} = require("../controllers/Products")


router.route("/create").post(create)                     //Ürünlerin oluşturulduğu route
router.route("/all").get(getAll)                         //Tüm ürünlerin getirildiği route
router.route("/:productId").get(getProduct)              //Girilen id'ye göre getirilen ürün route
router.route("/discounted/products").get(getDiscounted)  //İndirimli olan ürünlerin getirilidği route
router.route("/:productId").delete(deleteProduct)        //Ürünlerin silindiği route
router.route("/:productId").put(updateProductStock)      //Ürünlerin stoğuna göre güncellendiği route





module.exports=router;