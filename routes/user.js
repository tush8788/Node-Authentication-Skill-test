const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller');

// router.get('/',userController.signInPage);
router.post('/sign-up',userController.SignUp);

//user
// router.use('/user',require('./user'));

module.exports=router;