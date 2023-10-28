const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    title: {
      type: String,
      // unique: true,
      required: true,
    },

    _id: { type: Schema.Types.ObjectId },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    user: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // username: {
    //   type: String,
    //   required: true,
    // },

    categories: {
      type: Array,
      // required: true,
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
