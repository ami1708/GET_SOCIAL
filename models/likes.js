const mongoose = require("mongoose");
//creating a schema for LIKE data in mongoose
const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.schema.ObjectId,
  },
  Likeable: {
    type: mongoose.schema.ObjectId,
    require: true,
    refPath : 
  },
});