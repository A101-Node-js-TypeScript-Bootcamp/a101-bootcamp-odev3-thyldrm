var express = require("express")
const config = require("./config")
const loaders = require("./loaders")
const app = express();
app.use(express.json())

config();
loaders();



app.listen(process.env.APP_PORT, () => {
    console.log(`Sunucu ${process.env.APP_PORT}'de çalıştı.`);
})