var express = require("express")
const config = require("./config")
const app = express();
app.use(express.json())

config();


app.listen(process.env.APP_PORT, () => {
    console.log(`Sunucu ${process.env.APP_PORT}'de çalıştı.`);
})