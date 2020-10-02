const express = require("express");
const router = express.Router();
// tell the router tht we are adding the controller function
const homeController = require("../controllers/home_controller");
// to get the homeController functions in our code
// for home page

console.log("router loaded");
router.get("/", homeController.home);
// whenever any other request comes in by user
router.use("/users", require("./users"));
router.use("/posts", require("./post")); //u hve written post here and in route was posts
router.use("/comments", require("./comments"));
router.use('/api',require('./api'))
router.use('/likes',require('./likes'))

// for route access from here
// router.use('/routeName',require('./routeFilename'))

module.exports = router;
