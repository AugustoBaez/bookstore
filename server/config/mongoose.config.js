const mongoose = require("mongoose")
require('dotenv').config()
const mongodbUrl = process.env.mongoDBURL;
console.log(mongodbUrl)

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("conection stablished"))
    .catch((error) => console.log("error conecting to db", error))