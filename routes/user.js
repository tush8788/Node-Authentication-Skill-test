const express=require('express');
const passport=require('passport');
const router=express.Router();
const userController=require('../controller/user_controller');

// router.get('/',userController.signInPage);
router.post('/sign-up',userController.SignUp);

router.post('/sign-in',passport.authenticate('local',{failureRedirect:'/'}),userController.signIn);
//profile
router.get('/profile',passport.checkAuthentication,userController.profile);

//sign out
router.get('/sign-out',userController.signOut)
module.exports=router;