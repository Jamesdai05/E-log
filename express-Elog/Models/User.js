const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // isAdmin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // role: {
    //   type: String,
    //   enum: ["Admin", "User"],
    // },

    photo: {
      type: String,
      required: false,
      default:
        "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
