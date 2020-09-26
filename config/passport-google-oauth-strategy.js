const passport = require("passport");

const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const user = require("../models/user");
//we need to tell passport to use object of google strategy

passport.use(
  new googleStrategy(
    {
      clientID:
        "741438108020-vm71e2n8nmi68nclqen0rtuq9ssvs9bq.apps.googleusercontent.com",
      clientSecret: "9K6fjTc2XhxdY5JuRWW_dkru",
      callbackURL: "http://localhost:2000/users/auth/google/callback",
    },
    //call back function
    //access token is expired then you get a refresh token to generate a new one

    function (accessToken, refreshToken, profile, done) {
      // find a user
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user
      ) {
        if (err) {
          console.log("error in google strategy-passport", err);
          return;
        }
        //print the token
        console.log(accessToken, refreshToken);
        console.log(profile);

        if (user) {
          // if found, set this user as req.user
          return done(null, user);
        } else {
          // if not found, create the user and set it as req.user
          User.create(
            {
              name: profile.displayName,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString("hex"),
            },
            function (err, user) {
              if (err) {
                console.log(
                  "error in creating user google strategy-passport",
                  err
                );
                return;
              }

              return done(null, user);
            }
          );
        }
      });
    }
  )
);

module.exports = passport;
