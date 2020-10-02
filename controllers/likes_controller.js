const likes = require("../models/likes");
const Comment = require("../models/comments");
const Post = require("../models/post");

//create a asynchronous action

module.exports.toggleLike = async function (req, res) {
  try {
    //LIKES/toggle//id=abcdef and type = post
    let likeable;
    //so that when we receives the json data back we can inc and dec the count
    //acc to that if deleted = false then count = +1 if true count = -1
    let deleted = False;

    if ((req.query.type = "Post")) {
        //if it is a post
      likeable = await Post.findById(res.query.id).populate("Likes");
    } else {

//if it is a comment
        likeable = await Comment.findById(req.query.id).populate("Likes");
    }

    //check if a like already exists
    let existingLike = await Like.findOne({
        
    })
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "iNTERNAL SERVER ERROR",
    });
  }
};
