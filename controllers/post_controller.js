const Post = require('../models/post');
const Comment = require('../models/comments');

module.exports.create =  async function(req, res){
    try{
    await Post.create({
        content: req.body.content,//content from the user in post in string format
        user: req.user._id //passing a user haven't created if user is login  or not
    });
    return res.redirect('back');
}catch(err)
{
    console.log('error',err)
    return;

}

}


module.exports.destroy =  async function(req,res){
    try{
//to find if post exists or not
let post = await Post.findById(req.params.id);

//check authorisation
///compare and convert it to string and .id means  mongoose convert object id to string
if(post.user==req.user.id){
    post.remove();
    //deleting the comments
    await Comment.deleteMany({post: req.params.id});
         return res.redirect('back')
    }
 else{
        return res.redirect('back');
    }

    }
    catch(err){
        console.log('error', err)
    }

    
        }
            //error handling




// we have to access this controller function inside the router file