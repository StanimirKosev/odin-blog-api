const Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");
const { DateTime } = require("luxon");

exports.create_comment = [
  // validate and sanitize
  body("author")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Author must be specified."),
  body("text")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Comment must be specified."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    }

    const { author, text } = req.body;
    new Comment({
      author,
      text,
      createdAt: DateTime.now().toLocaleString(DateTime.DATE_MED),
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.json({ msg: "Comment created" });
    });
  },
];

exports.get_comments = (req, res, next) => {
  Comment.find()
    .sort({ createdAt: "descending" })
    .exec((err, comments) => {
      if (err) {
        return next(err);
      }
      res.json({ comments });
    });
};

exports.get_single_comment = (req, res, next) => {
  Comment.findById(req.params.commentid).exec((err, comment) => {
    if (err) {
      return next(err);
    }
    res.json({ comment });
  });
};

exports.update_comment = (req, res, next) => {
  const { author, text } = req.body;
  Comment.findByIdAndUpdate(req.params.commentid, { author, text }, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ msg: "Comment updated." });
  });
};

exports.delete_comment = (req, res, next) => {
  const { author, text } = req.body;
  Comment.findByIdAndDelete(req.params.commentid, (err) => {
    if (err) {
      return next(err);
    }
    res.json({ msg: "Deleting successfull" });
  });
};
