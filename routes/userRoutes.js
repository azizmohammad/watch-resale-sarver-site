const { createNewUserController, getUserController } = require('../controllers/userController');

const router = require('express').Router();

router.get('/get-user/:id', getUserController)

router.post('/create', createNewUserController)

module.exports = router;