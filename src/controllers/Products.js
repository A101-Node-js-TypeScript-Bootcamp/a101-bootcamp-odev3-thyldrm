const httpStatus = require("http-status");
const {createProduct,allProducts,getSingleProduct,getDiscountedProducts,removeProduct,updateProduct} = require("../services/Products")

const create = async (req, res) => {
    createProduct(req.body).then((response)=>{
        res.status(httpStatus.CREATED).send(Object.assign({ status: true, message: "Product added" }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}

const getAll = async(req, res) => {
    allProducts().then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "All products brought" }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}

const getProduct = async(req, res) => {
    getSingleProduct(req.params.productId).then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "The product whose id is entered has been brought." }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}

const getDiscounted = async(req, res) => {
    getDiscountedProducts().then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "Discounted products were brought." }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}

const deleteProduct = async(req, res) => {
    if(!req.params?.productId) {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "ID information missing"
        })
    }
    removeProduct(req.params.productId).then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "The product has been deleted" }))
    }).catch(()=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: "There is a discount for the product" })
    })
}

const updateProductStock = async(req, res) => {
    updateProduct(req.params.productId,req.body.stock).then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "Product stock updated" }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}



module.exports = {create,getAll,getProduct,getDiscounted,deleteProduct,updateProductStock}