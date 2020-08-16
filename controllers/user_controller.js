
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User profile"


    });
};
// we have to access this controller function inside the router file