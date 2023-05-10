const Order = require("../model/Order");

// add new order controller
const addNewOrderController = async (req, res) => {
    try {
        const { buyerId, sellerId, product, phone, meetLocation, buyerImage } = req.body || {};

        const newOrder = new Order({
            buyerId,
            sellerId,
            product,
            phone,
            meetLocation,
            buyerImage
        })

        await newOrder.save();

        if (newOrder?._id) {
            res.status(201).json(newOrder);
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

// get all my orders controller
const getAllMyOrdersController = async (req, res) => {
    try {
        const { id, type } = req.params || {}

        const query = type === 'seller' ? { sellerId: id } : { buyerId: id }

        const orders = await Order.find(query).populate('product');
        res.status(200).json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Server Eror Occurred!!'
        })
    }
}

module.exports = {
    addNewOrderController,
    getAllMyOrdersController
}