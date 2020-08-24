
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User profile"


    });
};
// we have to access this controller function inside the router 

//rendered the sign up page//
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codial|Sign Up"
    
    })

}
//rendered the sign in page//
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codial|Sign In"
    })

}
//gets the sign up data
module.exports.create= (function(req,res){
    //to do
});
//gets the sign in data
module.exports.createSession= (function(req,res){
    //to do
});