const likes = require("../models/likes");
const Comment = require("../models/comments");
const Post = require("../models/post");
const Like = require("../models/likes");

//create a asynchronous action

module.exports.toggleLike = async function (req, res) {
  try {
    //LIKES/toggle/?id=abcdef&typePost
    let Likeable;
    //so that when we receives the json data back we can inc and dec the count
    //acc to that if deleted = false then count = +1 if true count = -1
    let deleted = false;

    if (req.query.type == "Post") {
      //if it is a post
      likeable = await Post.findById(req.query.id).populate("likes");
    } else {
      //if it is a comment
      likeable = await Comment.findById(req.query.id).populate("likes");
    }
    //check if a like already exists
    //ONE USER can like once
    let existingLike = await Like.findOne({
      likeable: req.query.id,
      onModel: req.query.type,
      user: req.user._id,
    });
    //creating a action
    //if a like already exists then we delete it else add one

    if (existingLike) {
      likeable.likes.pull(existingLike._id);
      likeable.save();
      existingLike.remove();
      //like is deleted
      deleted = true;
    } else {
      //else make a new like
      let newLike = await Like.create({
        user: req.user._id,
        likeable: req.query.id,
        onModel: req.query.type,
      });
      likeable.likes.push(newLike._id);
      likeable.save();
    }
    return res.json(200, {
      message: "Request successful",
      data: {
        deleted: deleted,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "iNTERNAL SERVER ERROR",
    });
  }
};
//try kro ab error kha thi?.. routes m space thi .. khaa?