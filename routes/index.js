const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.signInPage);
router.get('/signup',homeController.signUpPage);

module.exports=router;