const Post = require("../models/post");
const Comment = require("../models/comments");
const { removeListener } = require("../models/post");
const Like = require("../models/like");

module.exports.create = async function (req, res) {
  //check if the request is in the form of ajax which is http XML request I.E XHR
  try {
    let post = await Post.create({
      content: req.body.content, //content from the user in post in string format
      user: req.user._id, //passing a user haven't created if user is login  or not
    });

    if (req.xhr) {
      return res.status(200).json({
        data: {
          //we get the data from above variable post
          post: post,
        },
        message: "POst created!",
      });
    }

    req.flash("success", "POst created");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", err);
    return res.redirect("back");
  }
};
module.exports.destroy = async function (req, res) {
  try {
    //to find if post exists or not
    let post = await Post.findById(req.params.id);

    //check authorisation
    ///compare and convert it to string and .id means  mongoose convert object id to string
    if (post.user == req.user.id) {
      // CHANGE :: delete the associated likes for the post and all its comments' likes too
      await Like.deleteMany({ likeable: post, onModel: "Post" });
      await Like.deleteMany({ _id: { $in: post.comments } });

      post.remove();
      //deleting the comments
      await Comment.deleteMany({ post: req.params.id });
      //DELETING VIA XHR AND DOM
      if (req.xhr) {
        return res.status(200).json({
          data: {
            post_id: req.params.id,
          },
          message: "post deleted successfully",
        });
      }

      req.flash("success", "Post and associated comment got deleted");

      return res.redirect("back");
    } else {
      req.flash("error", "you cannot delete the post");
      return res.redirect("back");
    }
  } catch (err) {
    req.flash("error".err);
    return res.redirect("back");
  }
};
//error handling

// we have to access this controller function inside the router file
