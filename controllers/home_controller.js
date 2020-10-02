const Post = require("../models/post");
const User = require("../models/user");
module.exports.home = async function (req, res) {
  //tells the server that it contains some asynchronous functions
  //changed to async await
  try {
    // populate the user of each post
    //populate the comments of each post

    let posts = await Post.find({}) //await
      .sort("-createdAt")
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
        populate : {
          path : "likes"
        }

      }).populate('comments')
      //for likes
        .populate('likes');

    let users = await User.find({}); //await
    return res.render("home", {
      title: "Codial | Home",
      posts: posts,
      all_users: users,
    });
  } catch (err) {
    //any sort of error
    console.log("error", err);
    return;
  }
};
// module.exports.actionName = function(req, res){}
// u have to show posts in views
//first method to clean our code
//using then
// Post.find({}).populate('comments').then(function())

// second method THIRD IS TO USE ASYNC AWAIT
// let posts =  Post.find({}).populate('comments').exec();
// post.then()
