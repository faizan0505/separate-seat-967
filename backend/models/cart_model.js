const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    title: String,
    image: String,
    price: String,
    userID: String
}, {
    versionKey: false
})

const cartModel = mongoose.model("cart", cartSchema)

module.exports = { cartModel }