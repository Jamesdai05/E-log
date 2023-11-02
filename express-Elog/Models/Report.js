const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },

    // _id: { type: mongoose.Schema.Types.ObjectId },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      // required: false,
      default:
        "https://www.pexels.com/photo/man-working-with-scheme-on-paper-at-table-5324968/",
    },

    user: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // username: {
    //   // type: String,
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: false,
    // },

    // username: {
    //   type: String,
    //   required: true,
    // },

    categories: {
      type: Array,
      required: true,
      default: "Equipment",
    },
    createdAt: {
      type: Date,
      default: function () {
        return new Date().toLocaleString();
      },
    },
  },
  { timestamps: true }
);

const report = mongoose.model("Report", reportSchema);
module.exports = report;
