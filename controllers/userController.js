const User = require("../model/User")

// get user controller
const getUserController = async (req, res) => {
    try {
        const { id } = req.params || {};

        const user = await User.findOne({ userId: id })

        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

// create new user controller
const createNewUserController = async (req, res) => {
    try {
        const { userId, role } = req.body || {}
        const newUser = new User({
            userId,
            role
        })

        newUser.save();

        res.status(201).json(newUser)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server Error Occurred!!'
        })
    }
}

module.exports = {
    getUserController,
    createNewUserController
}