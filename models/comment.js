const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.model(
  "comments",
  new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: String,
    blogid: String,
  })
);

module.exports = commentSchema;
