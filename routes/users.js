const express = require('express')
const router = express.Router();


// tell the router tht we are adding the controller function
const userController = require('../controllers/user_controller')
// to get the userController functions in our code
router.get('/profile',userController.profile)



module.exports= router;