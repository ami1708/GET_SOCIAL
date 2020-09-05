const Post = require('../models/post')

module.exports.create = function(req, res){
    console.log(req.user);
    Post.create({
        content: req.body.content,//content from the user in post in string format
        user: req.user.id //passing a user haven't created if user is login  or not
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');
    });
}



// we have to access this controller function inside the router file