const { addNewProductController, getAllProductController } = require('../controllers/productController');

const router = require('express').Router();

router.get('/get-all', getAllProductController)

router.post('/add-product', addNewProductController)

module.exports = router;