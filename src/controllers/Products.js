const httpStatus = require("http-status");
const {createProduct,allProducts} = require("../services/Products")

const create = async (req, res) => {
    createProduct(req.body).then((response)=>{
        res.status(httpStatus.CREATED).send(Object.assign({ status: true, message: "Product Eklendi" }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}

const getAll = async(req, res) => {
    allProducts().then((response)=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true, message: "Products Çekildi." }, response))
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    })
}






module.exports = {create,getAll}