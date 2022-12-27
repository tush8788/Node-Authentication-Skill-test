const express = require('express');
const router = express.Router();

// import home_controller
const homeController = require('../controller/home_controller');
//sign in page
router.get('/', homeController.signInPage);
//sign up page
router.get('/signup', homeController.signUpPage);

//sending req to user routes
router.use('/user', require('./user'));

module.exports = router;