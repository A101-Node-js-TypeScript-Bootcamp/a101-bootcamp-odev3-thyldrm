var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
var docClient = new AWS.DynamoDB.DocumentClient()


const createProduct = async (product) => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        "ConditionExpression": "attribute_not_exists(productId)",
        Item: {
            "productId": uuidv4(),
            "stock": product.stock,
            "productName": product.productName,
            "isDiscount": product.isDiscount,
            "category": {
                "categoryId": uuidv4(),
                "categoryName": product.category.categoryName,
            }
        },
    };
    const data = await docClient.put(params).promise();
    return data;
}

const allProducts = async () => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        Select: "ALL_ATTRIBUTES"
    };
    const data = await docClient.scan(params).promise();
    return data;
}

const getSingleProduct = async (productId) => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        Key:{
            "productId":productId
        }
    };
    const data = await docClient.get(params).promise();
    return data;
}

const getDiscountedProducts = async () => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        Select: "ALL_ATTRIBUTES"
    };
    const data = await docClient.scan(params).promise();
    const filtered = data.Items.filter(p=>p.isDiscount)
    return filtered;
}

const removeProduct = async (productId) => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        Key: {
            "productId": productId,
        },
        ConditionExpression:"isDiscount = :val",
        ExpressionAttributeValues: {
        ":val": false
    }
    };
    const data = await docClient.delete(params).promise();
    return data;
}

const updateProduct = async (productId,newStock) => {
    var params = {
        TableName: process.env.TABLE_PRODUCTS,
        Key:{
            "productId": productId,
        },
        UpdateExpression: "set stock = :stock",
        ExpressionAttributeValues:{
            ":stock":newStock,
        },
        ReturnValues:"UPDATED_NEW"
    };
    const data = await docClient.update(params).promise();
    return data;
}

module.exports = { createProduct, allProducts,getSingleProduct,getDiscountedProducts,removeProduct,updateProduct }