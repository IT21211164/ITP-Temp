const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    itemNo: { type: String, required: true },
    timberType: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("product", productSchema);