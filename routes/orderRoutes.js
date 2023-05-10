const { addNewOrderController, getAllMyOrdersController } = require('../controllers/orderController');

const router = require('express').Router()

router.get('/my-orders/:id/:type', getAllMyOrdersController)

router.post('/add-order', addNewOrderController);

module.exports = router;