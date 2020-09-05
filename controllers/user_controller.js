const User = require('../models/user');
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}
// render the sign up page
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_up', {
        title: "Codial | Sign Up"
    })
}
// render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_in', {
        title: "Codial | Sign In"
    })
}
// get the sign up data
module.exports.create = function(req, res){

    //console.log(req.body)
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}
        console.log(user)
        if (!user){
            console.log('user not present');
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            console.log('user present');

            return res.redirect('back');
        }

    });
}
// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // TODO later

    return res.redirect('/')
}
module.exports.destroySession = function (req,res){
    //passport js gives this request(built in)
    req.logout();
    return res.redirect('/')
}
    
