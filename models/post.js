const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.model(
  "posts",
  new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
  })
);

module.exports = postSchema;
