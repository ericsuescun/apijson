const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/apijson', { useNewUrlParser: true });

mongoose.connection.on("error", function(e) { console.error(e); });

app.get('/products', async (req, res) => {
	const productList = await Product.find();
	res.header("Content-Type", "application/json");
	res.json(productList);
})

app.listen(3000, () => console.log("Listening on port 3000 ..."));