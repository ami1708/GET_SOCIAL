//we are just fetching out the id of the user from the payload checking if user is there
// //or not
// //tell passport to use jwt
// //done is a callback function
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
// //extract JWT from head we require a module
const ExtractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
const env = require("./environment");
let opts = {
  //header is having a list of key we are extracting
  //method creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  //decrypted using codial
  //The secret key used in password-jwt-strategy.js is 'codial', _____ will set the token and send it to the user.
  secretOrKey: env.jwt_secret,
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user from JWT");
        return;
      }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
