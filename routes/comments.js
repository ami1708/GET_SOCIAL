const express = require('express')
const router = express.Router();
const passport = require("passport");


// tell the router tht we are adding the controller function
const commentsController = require('../controllers/comments_controller')
// to get the userController functions in our code
router.post('/create',passport.checkAuthentication, commentsController.create)
module.exports = router;
