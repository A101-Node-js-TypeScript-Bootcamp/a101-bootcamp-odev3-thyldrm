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







module.exports = { createProduct }