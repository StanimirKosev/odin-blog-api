const Post = require("../models/post");
const { DateTime } = require("luxon");

exports.create_posts = (req, res, next) => {
  const { title, text } = req.body;
  new Post({
    title,
    text,
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  }).save((err) => {
    return next(err);
  });
  res.json({
    msg: "Post created.",
  });
};

exports.get_posts = (req, res, next) => {
  Post.find()
    .sort({ createdAt: "descending" })
    .exec((err, posts) => {
      if (err) {
        return next(err);
      }
      res.json({ posts });
    });
};

/*exports.get_single_post = (req, res, next) => {
  Post.findById(req.params.id).exec((err, post) => {
    if (err) {
      return next(err);
    }
    res.json({ post });
  });
};*/

exports.update_post = (req, res, next) => {
  const { title, text } = req.body;
  Post.findByIdAndUpdate(req.params.id, { title, text }, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ msg: "Post updated." });
  });
};

exports.delete_post = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ msg: "Deleting successfull" });
  });
};
