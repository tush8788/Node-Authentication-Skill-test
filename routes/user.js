const express = require('express');
const passport = require('passport');
const router = express.Router();

// import user_controller
const userController = require('../controller/user_controller');

//creating user
router.post('/sign-up', userController.SignUp);

//create session or login user
router.post('/sign-in', passport.authenticate('local', { failureRedirect: '/' }), userController.signIn);

//profile page
router.get('/profile', passport.checkAuthentication, userController.profile);

//sign out
router.get('/sign-out', userController.signOut);

//google authentication
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

//google call back url
router.get('/auth/google/callback', passport.authenticate(
    'google',
    { failureRedirect: '/' }
), userController.signIn)

//reset password page
router.get('/reset-password-page', passport.checkAuthentication, userController.resetPasswordPage);

//reset password / set new password 
router.post('/setNewPassword', passport.checkAuthentication, userController.setNewPassword);

module.exports = router;