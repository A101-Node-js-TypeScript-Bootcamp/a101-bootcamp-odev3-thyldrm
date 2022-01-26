var AWS = require("aws-sdk");

const connectDB = async () => {
        await AWS.config.update({
            region: "us-east-1",
            accessKeyId: "",
            secretAccessKey: "",
            endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    })
}

module.exports = {connectDB};