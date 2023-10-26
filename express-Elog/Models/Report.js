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
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },

    username: {
      type: String,
      required: false,
    },

    categories: {
      type: Array,
      required: false,
      default: "Equipment",
    },
    createdAt: {
      type: Date,
      default: new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
    },
  },
  { timestamps: true }
);

const report = mongoose.model("Report", reportSchema);
module.exports = report;
