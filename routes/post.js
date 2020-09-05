const express = require('express')
const router = express.Router();


// tell the router tht we are adding the controller function
const postController = require('../controllers/post_controller')
// to get the userController functions in our code
router.post('/create',postController.create)
module.exports = router;






