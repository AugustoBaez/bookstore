const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("conection stablished"))
    .catch((error) => console.log("error conecting to db", error))