const Post = require('../../../models/post')
//index is  when we want tpo display a list
module.exports.index =  async function(req,res){

    let posts = await Post.find({}) //await
      .sort("-createdAt")
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        }
      });
    return res.json(200,{
        //200 means success
        message : "Lists of posts",
        posts:[],
        posts: posts
    })

}