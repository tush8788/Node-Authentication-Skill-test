const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.signInPage);
router.get('/signup',homeController.signUpPage);

//user
router.use('/user',require('./user'));

module.exports=router;