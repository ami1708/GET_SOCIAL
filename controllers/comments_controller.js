const Comment = require('../models/comments');
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){

        if (post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
        }

    });
}







module.exports.destroy = function(req, res){
    //finding the comment which u want to delete

    Comment.findById(req.params.id, function(err, comment){
        //check authorize or not
        if (comment.user == req.user.id){
//comment schema also have a post id which needed to store somewhere so that from that id
//we can know what post is that in which the comment is found and delete the id of comment
//from that posts aS WELL
            let postId = comment.post;

            comment.remove();
//PULL OUT THE COMMENT ID FROM COMMENT SCHEMA
            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}
   
// const Comment = require('../models/comments');
// const Post = require('../models/post');
// module.exports.create = function(req,res){
// Post.findById(req.body.post ,function(err,post){

//     if(post){
//         Comment.create({
//             content :req.body.content,
//             post: req.body.post,
//             user: req.user._id
//         },
//         function(err,comment){
//             //Handled error skipped
//             post.comments.push(comment); //given by mongodb automatically fetched the post id 
//             post.save() //save the comment in the db
//             res.redirect('/')
//         })
//     }
// })

// }
