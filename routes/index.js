const express = require('express')
const router = express.Router();
// tell the router tht we are adding the controller function
const homeController = require('../controllers/home_controller')
// to get the homeController functions in our code
// for home page

console.log('router loaded');
router.get('/',homeController.home);
// whenever any other request comes in by user
router.use('/users',require('./users'));
router.use('/post',require('./post'));


// for route access from here
// router.use('/routeName',require('./routeFilename'))

module.exports = router;



