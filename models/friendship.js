const mongoose = require("mongoose");

const friendshipSchema = new mongoose.Schema(
  {
    from_user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    to_user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Friendship = mongoose.model("friendship", friendshipSchema);
module.exports = Friendship;
