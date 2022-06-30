const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.model(
  "user",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

module.exports = userSchema;
