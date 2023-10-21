const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    username: {
      type: String,
      required: true,
    },

    categories: {
      type: Array,
      required: false,
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
