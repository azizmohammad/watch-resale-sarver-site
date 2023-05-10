const { addNewCategoryController, getCategoriesController } = require('../controllers/categoryController');

const router = require('express').Router();

router.get('/get-all', getCategoriesController);

router.post('/add-category', addNewCategoryController);

module.exports = router;