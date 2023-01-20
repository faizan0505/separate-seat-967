const mongoose = require("mongoose")

const proSchema = mongoose.Schema({
    title:String,
    image:String,
    price:String
},{
    versionKey : false
})

const proModel = mongoose.model("product",proSchema)

module.exports = {proModel}