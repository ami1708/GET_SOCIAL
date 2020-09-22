const mongoose = require("mongoose");
//we have stored the path of files in the db
const multer = require("multer");
const path = require("path");
//here
const AVATAR_PATH = path.join("/uploads/users/avatars");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
//from documentation

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //dirname is current what i am in and below is the whole path
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
//static functions
//they are called when we have to call over a similar function  in a particular class
//ex : class planets
//we have to find the population of all the planets so we will call a static function
// in a particular planet
userSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
userSchema.statics.avatarPath = AVATAR_PATH;

var upload = multer({ storage: storage });
const user = mongoose.model("User", userSchema);
module.exports = user;
