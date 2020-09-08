const express = require('express')
const router = express.Router();
const passport = require("passport");



// tell the router tht we are adding the controller function
const postController = require('../controllers/post_controller');
// to get the userController functions in our code
router.post('/create',passport.checkAuthentication, postController.create);
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);

module.exports = router;





