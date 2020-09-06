const Comment = require('../models/comments');
const Post = require('../models/post');
module.exports.create = function(req,res){
Post.findById(req.body.post ,function(err,post){

    if(post){
        Comment.create({
            content :req.body.content,
            post: req.body.post,
            user: req.user._id
        },
        function(err,comment){
            //Handled error skipped
            post.comments.push(comment); //given by mongodb automatically fetched the post id 
            post.save() //save the comment in the db
            res.redirect('/')
        })
    }
})

}
//its done..
//mistake?