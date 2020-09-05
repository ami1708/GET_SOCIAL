const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
//require the user or import the user from models
const User = require('../models/user')
 
//we need to tell the passport to use the local strategy
//authentication using the passport
passport.use(new localStrategy({
    //here email is a property in schema me thi jo
        usernameField: 'email',
        


},
//callback function  in local stack
//email and passport are the values passed below
function(email,password,done){
//find the user and establish the identity
//done is the callback function reporting the passport.js
// The purpose of a verify callback is to find the user that possesses a set of credentials.
//here first email is the property from db and second one is the value which is passed
User.findOne({email:email},function(err,user){
    if(err){
        console.log('error in finding the user --> Passport')
//done takes 2 arguments 1 is err and the second is something else but now we will use the first one
        return done(err);
    }

    if(!user|| user.password!=password){
        return console.log('invalid user name/password')

        // err is null and the authentication is false
        return done(null,false)

    }
    //user is found

    return done(null,user)
})
 

}
));


//serializing the user to decide which key is to be kept i the cookies
//storing the user id in encrypted format in cookie

passport.serializeUser(function(user,done){
    done(null,user.id);
});





//deserializing the user from the encrypted key key in the cookies


passport.deserializeUser(function(id,done){
    //if the user got found
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding the user --> Passport')
            return done(err)
        }
        return done(null,user)
    })
})

// 

passport.isUserAuth=(req,res,next)=>{

    if(req.isAuthenticated()){
  
      res.locals.user=req.user;
    }
  
    return next();
  
  }
//check whether the user is authenticated

passport.checkAuthentication =  function(req,res,next){
    
    //how to check the req is authenticated ( Authentication is the process of recognizing a user's identity. It is the mechanism of associating an incoming request with a set of identifying credentials. ... The credential often takes the form of a password, which is a secret and known only to the individual and the system.)
    //if the user is signed in ,then pass on the request to the next fn which is controller action
    if(req.isAuthenticated()){//is authenticated is a method(signed in or not)
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in')
}

//when any request comes this middleware will be called
//if the user is signed in
//set the user for authentication
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
//req.user contains the current signed in user from the session cookie we are sending 
//to the locals for views
        res.locals.user = req.user;


    }
    next();
}



module.exports= passport; 
