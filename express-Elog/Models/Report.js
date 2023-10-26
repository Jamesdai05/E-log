const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },

    username: {
      type: String,
      required: false,
    },

    categories: {
      type: Array,
      required: true,
      default: "Equipment",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const report = mongoose.model("Report", reportSchema);
module.exports = report;
