const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.model(
  "comments",
  new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
  })
);

module.exports = commentSchema;
