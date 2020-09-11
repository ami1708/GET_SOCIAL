const Post = require('../models/post');
const Comment = require('../models/comments');

module.exports.create =  async function(req, res){
    try{
    await Post.create({
        content: req.body.content,//content from the user in post in string format
        user: req.user._id //passing a user haven't created if user is login  or not
    });

    req.flash('success','POst created')
    return res.redirect('back');
    
}catch(err)
{
    req.flash('error',err)
    return res.redirect('back');

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
    req.flash('success','Post and associated comment got deleted')

         return res.redirect('back')
    }
 else{
    req.flash('error','you cannot delete the post')
        return res.redirect('back');
    }

    }
    catch(err){
        req.flash('error'.err)
        return res.redirect('back');
    }

    
        }
            //error handling




// we have to access this controller function inside the router file