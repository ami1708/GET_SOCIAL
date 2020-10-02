const mongoose = require("mongoose");
//creating a schema for LIKE data in mongoose
const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.schema.ObjectId,
  },
  //this defines the object id of the liked object
  Likeable: {
    type: mongoose.schema.ObjectId,
    require: true,
    refPath: "onModel",
  },
  //this field is used for defining the type of the liked object since this is a dynamic reference
  onModel: {
    type: String,
    required: true,
    //on;y these two models contains likes to make sure
    enum: ["Post", "Comment"],
  }
},{
      timestamps: true
  }
);
const Like = module.exports.model('Like',LikeSchema);
module.exports = Like;


//GO TO POST AND COMMENT AND TELL YOI HAVE A ARRAY OF LIKES