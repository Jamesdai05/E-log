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
      required: true,
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
      default: new Date().toISOString,
    },
  },
  { timestamps: true }
);
