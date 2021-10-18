const router = require('express').Router();
const usersController = require('../controllers/user');

router
    .route('/register')
    .post(usersController.register);

router
    .route('/login')
    .post(usersController.login)

router
    .route('/verifyToken')
    .get(usersController.verifyToken)

module.exports = router;
