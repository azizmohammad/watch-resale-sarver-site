const Product = require("../model/Product");

// get all product controller
const getAllProductController = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

// add new product controller
const addNewProductController = async (req, res) => {
    try {
        const { productName, resalePrice, originalPrice, picture, yearsOfuse, userId, category, userName, userImage, location } = req.body || {};

        const newProduct = new Product({
            productName,
            resalePrice,
            originalPrice,
            picture,
            yearsOfuse,
            userId,
            userName,
            category,
            userImage,
            location,
            createdTime: new Date()
        });

        await newProduct.save();

        if (newProduct?._id) {
            res.status(201).json(newProduct)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

module.exports = {
    getAllProductController,
    addNewProductController
}