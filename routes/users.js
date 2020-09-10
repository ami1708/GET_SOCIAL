const express = require('express')
const router = express.Router();
const passport = require('passport')
// tell the router tht we are adding the controller function
const userController = require('../controllers/user_controller')
// to get the userController functions in our code
//we want the profile page to be accessible only when the user is signed in
router.get('/profile/:id',passport.checkAuthentication, userController.profile)
router.post('/update/:id',passport.checkAuthentication, userController.update)

router.get('/sign-in',userController.signIn)
router.get('/sign-up',userController.signUp)
//u  called post js and comment js here?

module.exports= router;

router.post('/create',userController.create)
//use passport as a middleware to authenticate
//passport first authenticates it
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},//this is return when authentication fails
 ) ,userController.createSession);//this function is called if it is done (authentication)

 router.get('/sign-out',userController.destroySession)
module.exports = router;
