const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.model(
  "posts",
  new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: String,
  })
);

module.exports = postSchema;
