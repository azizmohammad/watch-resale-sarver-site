const Category = require("../model/Category");

// add new category controller
const addNewCategoryController = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                error: {
                    name: 'Category Name is Required!!'
                }
            })
        }

        const newCategory = new Category({
            name
        })

        await newCategory.save();

        if (newCategory?._id) {
            res.status(201).json(newCategory)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

// get all category controller
const getCategoriesController = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
} 

module.exports = {
    addNewCategoryController,
    getCategoriesController   
}