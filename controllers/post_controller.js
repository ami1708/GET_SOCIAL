const Post = require('../models/post');
const Comment = require('../models/comments');

module.exports.create = function(req, res){
    console.log(req.body); //this is showing anything?//ur create is also not working? it was but when i added del then it was showing error
    Post.create({
        content: req.body.content,//content from the user in post in string format
        user: req.user._id //passing a user haven't created if user is login  or not
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');
        //i did already and also i have added sas only we can check now?
    });//i think u have to compare ur code with sirs code..there are error..
}


module.exports.destroy =  function(req,res){
    //to find if post exists or not
    Post.findById(req.params.id,function(err,post){
        //check authorisation
        ///compare and convert it to string and .id means  mongoose convert object id to string
        if(post.user==req.user.id){
            post.remove();
            //deleting the comments
            Comment.deleteMany({post: req.params.id},function(err){
                 return res.redirect('back')
            });
         }else{
                return res.redirect('back');
            }
            //error handling
     
        

    
    });
}
// we have to access this controller function inside the router file