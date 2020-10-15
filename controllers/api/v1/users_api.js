//used to create  the session
const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const env = require('./../../../config/environment')

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        //user to json  here it got converted
        //The secret key used in password-jwt-strategy.js is 'codial', _____ will set the token and send it to the user.
      //10s 
       token: jwt.sign(user.toJSON(),env.jwt_secret , { expiresIn: "10000" }),
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
