const mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	name: String,
	price: Number
})

module.exports = mongoose.model("Product", ProductSchema)