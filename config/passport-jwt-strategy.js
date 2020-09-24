// const passport = require("passport");
// const JWTStrategy = require("passport-jwt").Strategy;
// //extract JWT from head we require a module
// const ExtractJWT = require("passport-jwt").ExtractJWT;
// //require user
// const User = require('../models/user')
// //a key should be there to encrypt any text and decrypt back

// let opts = {
//     //header is having a list of key

//     //the bearer have the jwt token
//     jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken,
//     secretOrKey : 'codial'
// }
// //we are basically authenticating the JWT here once the JWT has generated of the user
// //we are just fetching out the id of the user from the payload chaecking if user is there
// //or not
// //tell passport to use jwt
// //done is a callback function
// passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
//     //find the user
//     User.findById(jwtPayload._id,function(err,user){
//         if(err){
//         console.log("Error in  finding user from jwt");return;
//         }
//         if(user){
//             return done (null,user);
//         }
//         else{
//             return done(null,false)
//         }
//     });

// }))
// module.exports = passport
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
  secretOrKey: "codial",
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
